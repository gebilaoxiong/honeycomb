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
    //方案编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '方案编号',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //日期
    name: 'date',
    mapping: 'date',
    type: 'date',
    dateFormat:'YYYY/MM/dd',

    header: '日期',
    xtype: 'Date',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //销售组织
    name: 'salesOrg',
    mapping: 'salesOrg',
    type: 'string',

    header: '销售组织',
    sortable: true
  },{
    //方案名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '方案名称',
    sortable: true
  }, {
    //价目表
    name: 'salesPrice',
    mapping: 'salesPrice',
    type: 'string',

    header: '价目表',
    sortable: true
  }, {
    //价目表对象
    name: 'salesPriceObject',
    mapping: 'salesPriceObject',
    type: 'string',

    header: '价目表对象',
    sortable: true
  },{
    //币别
    name: 'currency',
    mapping: 'currency',
    type: 'string',

    header: '币别',
    sortable: true
  },   {
    //价目表生效日
    name: 'effectDate',
    mapping: 'effectDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '价目表生效日',
    xtype: 'Date',
    sortable: true
  }, {
    //价目表失效日
    name: 'invalidDate',
    mapping: 'invalidDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '价目表失效日',
    xtype: 'Date',
    sortable: true
  }];
})