/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:44
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
    //编码
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
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //货币代码
    name: 'currencyCode',
    mapping: 'currencyCode',
    type: 'string',

    header: '货币代码',
    sortable: true
  }, {
    //单据显示货币符号
    name: 'showSymbol',
    mapping: 'showSymbol',
    type: 'bool',

    header: '单据显示货币符号',
    xtype: 'Boolean',
    sortable: true
  }, {
    //单位精度
    name: 'unitPrecision',
    mapping: 'unitPrecision',
    type: 'int',

    header: '单位精度',
    xtype: 'Number',
    align:'center',
    sortable: true
  }, {
    //金额精度
    name: 'precision',
    mapping: 'precision',
    type: 'int',

    header: '金额精度',
    xtype: 'Number',
    align:'center',
    sortable: true
  },{
    //优先级
    name: 'priority',
    mapping: 'priority',
    type: 'int',

    header: '优先级',
    align:'center',
    xtype: 'Number',
    sortable: true
  }, {
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