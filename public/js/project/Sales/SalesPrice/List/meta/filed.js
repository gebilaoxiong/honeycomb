/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:17
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
  },  {
    //编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编号',
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
    //币别
    name: 'currency',
    mapping: 'currency',
    type: 'string',

    header: '币别',
    sortable: true
  }, {
    //生效日
    name: 'effectDate',
    mapping: 'effectDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '生效日',
    xtype: 'Date',
    sortable: true
  }, {
    //失效日
    name: 'invalidDate',
    mapping: 'invalidDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '失效日',
    xtype: 'Date',
    sortable: true
  }, {
    //整单审核状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '整单审核状态',
    sortable: true
  }, {
    //销售组织
    name: 'salesOrg',
    mapping: 'salesOrg',
    type: 'string',

    header: '销售组织',
    sortable: true
  }, {
    //含税
    name: 'hasTax',
    mapping: 'hasTax',
    type: 'bool',

    header: '含税',
    xtype:'Boolean',
    sortable: true
  }, {
    //价目对象
    name: 'priceObject',
    mapping: 'priceObject',
    type: 'string',

    header: '价目对象',
    sortable: true
  }, {
    //价格类型
    name: 'priceType',
    mapping: 'priceType',
    type: 'string',

    header: '价格类型',
    sortable: true
  }];
})