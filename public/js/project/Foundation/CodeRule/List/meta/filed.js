/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:44
 * @description 
 */
define(function(){
  return [{
    //ID
    name: 'id',
    mapping: 'id',
    type: 'string',
    /*是否是主键*/
    isIdentity: true,
    /*是否生成列*/
    isColumn: false
  }, {
    //业务对象
    name: 'businessObject',
    mapping: 'businessObject',
    type: 'string',

    header: '业务对象',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  },{
    //默认规则
    name: 'isDefault',
    mapping: 'isDefault',
    type: 'bool',

    header: '默认规则',
    xtype: 'Boolean',
    sortable: true
  }, {
    //描述
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '描述',
    sortable: true,
    width:180
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'bool',

    header: '数据状态',
    xtype: 'Boolean',
    sortable: true
  }]
})
