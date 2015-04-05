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
    //单据类型
    name: 'type',
    mapping: 'type',
    type: 'string',

    header: '单据类型',
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
    //申请日期
    name: 'applyDate',
    mapping: 'applyDate',
    dateFormat: 'YYYY/MM/dd',
    type: 'date',

    header: '申请日期',
    xtype: 'Date',
    sortable: true
  }, {
    //申请组织
    name: 'applyOrg',
    mapping: 'applyOrg',
    type: 'string',

    header: '申请组织',
    sortable: true
  }, {
    //退料类型
    name: 'rejectType',
    mapping: 'rejectType',
    type: 'string',

    header: '退料类型',
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
    //规格型号
    name: 'specification',
    mapping: 'specification',
    type: 'string',

    header: '规格型号',
    sortable: true
  }, {
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //退料申请数量
    name: 'rejectAmount',
    mapping: 'rejectAmount',
    type: 'float',

    header: '退料申请数量',
    xtype: 'Number',
    sortable: true
  }];
})