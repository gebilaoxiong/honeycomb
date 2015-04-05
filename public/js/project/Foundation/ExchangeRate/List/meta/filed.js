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
    //直接汇率
    name: 'directRate',
    mapping: 'directRate',
    type: 'float',

    header: '直接汇率',
    xtype: 'Number',
    sortable: true
  }, {
    //间接汇率
    name: ' indirectRate',
    mapping: 'indirectRate',
    type: 'float',

    header: '间接汇率',
    xtype: 'Number',
    sortable: true
  }, {
    //汇率类型
    name: 'type',
    mapping: 'type',
    type: 'string',

    header: '汇率类型',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //原币
    name: 'originalCurrency',
    mapping: 'originalCurrency',
    type: 'string',

    header: '原币',
    sortable: true
  }, {
    //目标币
    name: 'destinationCurrency',
    mapping: 'destinationCurrency',
    type: 'string',

    header: '目标币',
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
  }]
})