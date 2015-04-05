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
  }, {
    //单据编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '单据编号',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //采购日期
    name: 'purchaseDate',
    mapping: 'purchaseDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '采购日期',
    xtype: 'Date',
    sortable: true
  }, {
    //供应商
    name: 'vendor',
    mapping: 'vendor',
    type: 'string',

    header: '供应商',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //采购组织
    name: 'applyOrg',
    mapping: 'applyOrg',
    type: 'string',

    header: '采购组织',
    sortable: true
  },{
    //关闭状态
    name: 'closed',
    mapping: 'closed',
    type: 'bool',

    header: '关闭状态',
    xtype:'Boolean',
    sortable: true
  },  {
    //作废状态
    name: 'invalid',
    mapping: 'invalid',
    type: 'bool',

    header: '作废状态',
    xtype:'Boolean',
    sortable: true
  }, {
    //物料编码
    name: 'materialCode',
    mapping: 'materialCode',
    type: 'string',

    header: '物料编码',
    sortable: true
  }, {
    //物料名称
    name: 'materialName',
    mapping: 'materialName',
    type: 'string',

    header: '物料名称',
    sortable: true
  }, {
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //数量
    name: 'amount',
    mapping: 'amount',
    type: 'float',

    header: '数量',
    xtype: 'Number',
    sortable: true
  }, {
    //交货日期
    name: 'receiptDate',
    mapping: 'receiptDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '交货日期',
    xtype: 'Date',
    sortable: true
  },  {
    //是否赠品
    name: 'isGift',
    mapping: 'isGift',
    type: 'bool',

    header: '是否赠品',
    xtype:'Boolean',
    sortable: true
  }];
})