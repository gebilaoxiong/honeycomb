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
    //数据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '数据状态',
    sortable: true
  }, {
    //关闭状态
    name: 'closed',
    mapping: 'closed',
    type: 'bool',

    header: '关闭状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //申请组织
    name: 'applyOrg',
    mapping: 'applyOrg',
    type: 'string',

    header: '申请组织',
    sortable: true
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
    //申请数量
    name: 'applyAmount',
    mapping: 'applyAmount',
    type: 'float',

    header: '申请数量',
    xtype: 'Number',
    sortable: true
  }, {
    //批准数量
    name: 'ratifyAmount',
    mapping: 'ratifyAmount',
    type: 'float',

    header: '批准数量',
    xtype: 'Number',
    sortable: true
  }, {
    //到货日期
    name: 'receiptDate',
    mapping: 'receiptDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '到货日期',
    xtype: 'Date',
    sortable: true
  }];
})