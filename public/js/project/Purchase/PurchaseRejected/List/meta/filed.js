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
    //退料日期
    name: 'rejectDate',
    mapping: 'rejectDate',
    dateFormat: 'YYYY/MM/dd',
    type: 'date',

    header: '退料日期',
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
    //货主类型
    name: 'shipperType',
    mapping: 'shipperType',
    type: 'string',

    header: '货主类型',
    sortable: true
  }, {
    //退料组织
    name: 'rejectOrg',
    mapping: 'rejectOrg',
    type: 'string',

    header: '退料组织',
    sortable: true
  }, {
    //货主
    name: 'shipper',
    mapping: 'shipper',
    type: 'string',

    header: '货主',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
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
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //实退数量
    name: 'rejectAmount',
    mapping: 'rejectAmount',
    type: 'float',

    header: '实退数量',
    xtype: 'Number',
    sortable: true
  }, {
    //仓库
    name: 'warehouse',
    mapping: 'warehouse',
    type: 'string',

    header: '仓库',
    sortable: true
  }, {
    //仓位
    name: 'warehousePos',
    mapping: 'warehousePos',
    type: 'string',

    header: '仓位',
    sortable: true
  }];
})