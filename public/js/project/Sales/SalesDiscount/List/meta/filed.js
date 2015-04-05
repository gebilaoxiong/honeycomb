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
    //折扣应用层
    name: 'applicationLayer',
    mapping: 'applicationLayer',
    type: 'string',

    header: '折扣应用层',
    sortable: true
  }, {
    //状态
    name: 'invalid',
    mapping: 'invalid',
    type: 'bool',

    header: '状态',
    xtype:'Boolean',
    sortable: true
  }, {
    //销售组织
    name: 'salesOrg',
    mapping: 'salesOrg',
    type: 'string',

    header: '销售组织',
    sortable: true
  }, {
    //币别
    name: 'currency',
    mapping: 'currency',
    type: 'string',

    header: '币别',
    sortable: true
  },  {
    //折扣对象
    name: 'discountObject',
    mapping: 'discountObject',
    type: 'string',

    header: '折扣对象',
    sortable: true
  }];
})