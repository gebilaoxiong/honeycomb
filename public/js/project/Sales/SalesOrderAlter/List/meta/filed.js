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
    //源订单编号
    name: 'originalCode',
    mapping: 'originalCode',
    type: 'string',

    header: '源订单编号',
    sortable: true
  }, {
    //客户
    name: 'customer',
    mapping: 'customer',
    type: 'string',

    header: '客户',
    sortable: true
  }, {
    //收货方
    name: 'receiver',
    mapping: 'receiver',
    type: 'string',

    header: '收货方',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //变更原因
    name: 'reason',
    mapping: 'reason',
    type: 'string',

    header: '变更原因',
    sortable: true
  }, {
    //生效状态
    name: 'isEffect',
    mapping: 'isEffect',
    type: 'bool',

    header: '生效状态',
    xtype:'Boolean',
    sortable: true
  }, {
    //作废状态
    name: 'isInvalid',
    mapping: 'isInvalid',
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
    //变更类型
    name: 'modifyType',
    mapping: 'modifyType',
    type: 'string',

    header: '变更类型',
    sortable: true
  }, {
    //原数量
    name: 'originalAmount',
    mapping: 'originalAmount',
    type: 'float',

    header: '原数量',
    xtype:'Number',
    sortable: true
  },{
    //新数量
    name: 'amount',
    mapping: 'amount',
    type: 'float',

    header: '新数量',
    xtype:'Number',
    sortable: true
  }];
})