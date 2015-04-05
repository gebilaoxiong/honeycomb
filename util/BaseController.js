/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 15:12:26
 * @description 控制器基类
 */
var expressMvc = require('express-mvc'),
  ObjectUtil = expressMvc.ObjectUtil,
  Controller = expressMvc.Controller,
  Sorter = expressMvc.Sorter,
  Filter = expressMvc.Filter,
  BaseController, searchDefaultParam;


BaseController = module.exports = Controller.define({

  //数据集合
  entities: undefined

});

searchDefaultParam = {
  limit: 25,
  start: 0,
  sorters: [{
    property: 'id',
    direction: 'desc'
  }]
};

//GET: /Foundation/Employee/search            条件查询(分页+过滤+排序)
BaseController.defineAction('search', function() {
  var me = this,
    entities = me.entities,
    queryParam, ret, total;

  //请求参数
  queryParam = ObjectUtil.extend({}, searchDefaultParam, me.queryParam);

  //过滤 不符合要求的通通跪了
  //接着排序
  ret = entities.find(Filter.decode(queryParam.filters))
    .sort(Sorter.decode(queryParam.sorters));

  //符合条件的数量
  total = ret.length;

  //任凭弱水三千，我只取一瓢饮。
  ret = ret.take(queryParam.start, queryParam.limit)
    .toArray();

  //出发吧！
  me.jsonResult({
    total: total,
    data: ret
  });
}, 'GET');


//POST: /Foundation/Employee/remove            删除
BaseController.defineAction('remove', function() {
  var me = this,
    entities = me.entities,
    idArray = me.bodyParam.idArray || [],
    records;

  //转换为String
  idArray = idArray.map(String);

  //获取记录集合
  //ps node为毛没有filter...差评！
  records = [];
  idArray.forEach(function(id) {
    var record;

    if (record = entities.getById(id)) {
      records.push(record);
    }
  });

  entities.remove(records);

  //log
  console.log('剩余数量：' + entities.length, '累计删除:' + entities.removed.length)

  me.jsonResult({
    success: true
  });
}, 'POST');


//POST: /Foundation/Employee/recycle     恢复删除
BaseController.defineAction('recycle', function() {
  var me = this,
    entities = me.entities,
    idArray = me.bodyParam.idArray || [];

  //恢复
  entities.recycle(idArray);

  //log
  console.log('剩余数量：' + entities.length, '累计删除:' + entities.removed.length)

  me.jsonResult({
    success: true
  });
}, 'POST');


//POST: /Foundation/Employee/audit                送审
BaseController.defineAction('audit', function() {
  var me = this;

  modifyRecordsDataState.call(me, me.bodyParam.idArray, 'auditing');

  me.jsonResult({
    success: true
  });
}, 'POST');

//POST: /Foundation/Employee/cancel                撤销审批
BaseController.defineAction('cancel', function() {
  var me = this;

  modifyRecordsDataState.call(me, me.bodyParam.idArray, 'reaudit');

  me.jsonResult({
    success: true
  });
}, 'POST');


//POST: /Foundation/Employee/consent              审批同意
BaseController.defineAction('consent', function() {
  var me = this;

  modifyRecordsDataState.call(me, me.bodyParam.idArray, 'audited');

  me.jsonResult({
    success: true
  });
}, 'POST');


//POST: /Foundation/Employee/reject               驳回
BaseController.defineAction('reject', function() {
  var me = this;

  modifyRecordsDataState.call(me, me.bodyParam.idArray, 'reaudit');

  me.jsonResult({
    success: true
  });
}, 'POST');


//POST: /Foundation/Employee/load?recordId=xxx     载入数据  
BaseController.defineAction('load', function() {
  var me = this,
    recordId = me.queryParam.recordId;

  me.jsonResult({
    success: true,
    data: me.record
  })
}, 'GET');


//POST: /Foundation/Employee/save                   保存（新建or更新）
BaseController.defineAction('save', function() {
  var me = this,
    record = me.queryParam.record;

  me.jsonResult({
    success: true
  })
}, 'POST');


//POST: /Foundation/Employee/query                   查询(combobox)
BaseController.defineAction('query', function() {
  var me = this,
    entities = me.entities,
    queryParam = me.queryParam,
    filter, sorter, total,
    ret;

  filter = {
    property: 'name',
    value: queryParam.query
  };

  sorter = {
    property: 'id',
    direction: 'DESC'
  }


  ret = entities
    .find(Filter.decode(filter))
    .sort(Sorter.decode(sorter));

  total = ret.length;


  //任凭弱水三千，我只取一瓢饮。
  ret = ret.take(queryParam.start, queryParam.limit)
    .toArray();


  me.jsonResult({
    success: true,
    total: total,
    data: ret
  })
}, 'GET')


/**
 * 根据ID数组获取响应的记录数组
 * @param  {Array}          idArray           id数组
 */
function getRecordsByIdArray(idArray) {
  var records = [],
    entities = this.entities;

  if (!idArray) {
    return records;
  }

  idArray.map(String).forEach(function(id) {
    var record;

    if (record = entities.getById(id)) {
      records.push(record);
    }
  });

  return records;
}

/**
 * 变更记录的数据状态
 * @param  {Array}          idArray           id数组
 * @param  {String}         dataState         数据状态
 */
function modifyRecordsDataState(idArray, dataState) {
  var records = getRecordsByIdArray.call(this, idArray);

  //伪代码 现实哪有这么容易
  records.forEach(function(item) {
    item.dataState = dataState;
  });
}

