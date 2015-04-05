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
  },{
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
    name: 'purchaseOrg',
    mapping: 'purchaseOrg',
    type: 'string',

    header: '采购组织',
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
  },{
    //规格型号
    name: 'specification',
    mapping: 'specification',
    type: 'string',

    header: '规格型号',
    sortable: true
  },{
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //新数量
    name: 'amount',
    mapping: 'amount',
    type: 'float',

    header: '新数量',
    xtype: 'Number',
    sortable: true
  }, {
    //新交货日期
    name: 'receiptDate',
    mapping: 'receiptDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '新交货日期',
    xtype: 'Date',
    sortable: true
  }, {
    //新单价
    name: 'price',
    mapping: 'price',
    type: 'float',

    header: '新单价',
    xtype: 'Number',
    sortable: true
  }, {
    //愿订单编号
    name: 'orderCode',
    mapping: 'orderCode',
    type: 'string',

    header: '愿订单编号',
    sortable: true
  }];
})