/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
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
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true
  },{
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  },  {
    //结算方式类别
    name: 'settlementCategory',
    mapping: 'settlementCategory',
    type: 'string',

    header: '结算方式类别',
    sortable: true
  }, {
    //业务分类
    name: 'businessCategory',
    mapping: 'businessCategory',
    type: 'string',

    header: '业务分类',
    sortable: true
  }, {
    //支付手续费
    name: 'commission',
    mapping: 'commission',
    type: 'bool',

    header: '支付手续费',
    xtype: 'Boolean',
    sortable: true
  }, {
    //承担方
    name: 'bearer',
    mapping: 'bearer',
    type: 'string',

    header: '承担方',
    sortable: true
  }, {
    //支付方式
    name: 'paymentType',
    mapping: 'paymentType',
    type: 'string',

    header: '支付方式',
    sortable: true
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }, {
    //审核人
    name: 'auditor',
    mapping: 'auditor',
    type: 'string',

    header: '审核人',
    sortable: true
  }, {
    //审核日期
    name: 'auditDate',
    mapping: 'auditDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '审核日期',
    xtype: 'Date',
    sortable: true
  }, {
    //禁用人
    name: 'disabler',
    mapping: 'disabler',
    type: 'string',

    header: '禁用人',
    sortable: true
  }, {
    //禁用日期
    name: 'disableDate',
    mapping: 'disableDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '禁用日期',
    xtype: 'Date',
    sortable: true
  }, {
    //禁用状态
    name: 'disabled',
    mapping: 'disabled',
    type: 'bool',

    header: '禁用状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //系统预置
    name: 'preset',
    mapping: 'preset',
    type: 'bool',

    header: '系统预置',
    xtype: 'Boolean',
    sortable: true
  }];
})