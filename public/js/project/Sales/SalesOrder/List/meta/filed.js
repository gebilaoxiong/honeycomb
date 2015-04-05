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
    //日期
    name: 'date',
    mapping: 'date',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '日期',
    xtype: 'Date',
    sortable: true
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
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //客户
    name: 'customer',
    mapping: 'customer',
    type: 'string',

    header: '客户',
    sortable: true
  }, {
    //销售部门
    name: 'salesDepartment',
    mapping: 'salesDepartment',
    type: 'string',

    header: '销售部门',
    sortable: true
  }, {
    //关闭状态
    name: 'closed',
    mapping: 'closed',
    type: 'bool',

    header: '关闭状态',
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
    xtype:'Number',
    sortable: true
  }, {
    //单价
    name: 'price',
    mapping: 'price',
    type: 'float',

    header: '单价',
    xtype:'Number',
    sortable: true
  }, {
    //要货日期
    name: 'receiptDate',
    mapping: 'receiptDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '要货日期',
    xtype: 'Date',
    sortable: true
  },{
    //业务关闭
    name: 'serviceClosed',
    mapping: 'serviceClosed',
    type: 'bool',

    header: '业务关闭',
    xtype: 'Boolean',
    sortable: true
  }];
})