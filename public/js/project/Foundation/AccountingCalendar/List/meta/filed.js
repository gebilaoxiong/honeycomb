/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description
 */
define(function() {
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
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  }, {
    //开始日期
    name: 'startDate',
    mapping: 'startDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '开始日期',
    xtype: 'Date',
    sortable: true
  }, {
    //结束日期
    name: 'endingDate',
    mapping: 'endingDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '结束日期',
    xtype: 'Date',
    sortable: true
  },{
    //起始会计年度
    name: 'startAnnual',
    mapping: 'startAnnual',
    type: 'int',

    header: '起始会计年度',
    sortable: true
  }, {
    //期间类型
    name: 'periodType',
    mapping: 'periodType',
    type: 'string',

    header: '期间类型',
    sortable: true
  },{
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }, {
    //禁用状态
    name: 'disabled',
    mapping: 'disabled',
    type: 'bool',

    header: '禁用状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //系统预置
    name: 'preset',
    mapping: 'preset',
    type: 'bool',

    header: '系统预置',
    xtype: 'Boolean',
    sortable: true
  }];
})