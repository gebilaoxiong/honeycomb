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
    sortable: true
  }, {
    //税率
    name: 'taxRate',
    mapping: 'taxRate',
    type: 'float',

    header: '税率%',
    xtype:'Number',
    sortable: true
  }, {
    //税收制度
    name: 'taxSystem',
    mapping: 'taxSystem',
    type: 'string',

    header: '税收制度',
    sortable: true
  }, {
    //税种
    name: 'taxCategory',
    mapping: 'taxCategory',
    type: 'bool',

    header: '税种',
    xtype: 'Boolean',
    sortable: true
  }, {
    //生效日期
    name: 'effectDate',
    mapping: 'effectDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '生效日期',
    xtype: 'Date',
    sortable: true
  }, {
    //失效日期
    name: 'invalidDate',
    mapping: 'invalidDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '失效日期',
    xtype: 'Date',
    sortable: true
  }, {
    //增值税
    name: 'isAddedValueTax',
    mapping: 'isAddedValueTax',
    type: 'bool',

    header: '增值税',
    xtype: 'Boolean',
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