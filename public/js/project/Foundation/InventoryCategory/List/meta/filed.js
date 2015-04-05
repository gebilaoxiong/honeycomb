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
    //创建组织
    name: 'createOrg',
    mapping: 'createOrg',
    type: 'string',

    header: '创建组织',
    sortable: true
  }, {
    //使用组织
    name: 'useOrg',
    mapping: 'useOrg',
    type: 'string',

    header: '使用组织',
    sortable: true
  }, {
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
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
    mapping: 'disabled',
    type: 'bool',

    header: '禁用状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //创建人
    name: 'creater',
    mapping: 'creater',
    type: 'string',

    header: '创建人',
    sortable: true
  }, {
    //创建日期
    name: 'createDate',
    mapping: 'createDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '创建日期',
    xtype: 'Date',
    sortable: true
  }, {
    //修改人
    name: 'modifier',
    mapping: 'modifier',
    type: 'string',

    header: '修改人',
    sortable: true
  }, {
    //修改日期
    name: 'modifiedDate',
    mapping: 'modifiedDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '修改日期',
    xtype: 'Date',
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
    name: 'disabledDate',
    mapping: 'disabledDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '禁用日期',
    xtype: 'Date',
    sortable: true
  }];
})