/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 20:00:51
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
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '客户编码',
    xtype: 'Link',
    sortable: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '客户名称',
    sortable: true
  }, {
    //简称
    name: 'shortName',
    mapping: 'shortName',
    type: 'string',

    header: '简称',
    sortable: true
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }, {
    //禁用状态
    name: 'disabled',
    mapping: 'Disabled',
    type: 'bool',

    header: '禁用状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //使用组织
    name: 'useOrg',
    mapping: 'useOrg',
    type: 'string',

    header: '使用组织',
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
    //客户分组
    name: 'groupName',
    mapping: 'groupName',
    type: 'string',

    header: '客户分组',
    sortable: true
  }];
})