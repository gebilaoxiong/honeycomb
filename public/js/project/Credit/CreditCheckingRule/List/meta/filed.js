/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:10
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
    //规则编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '规则编码',
    xtype:'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //规则名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '规则名称',
    sortable: true
  }, {
    //当前组织
    name: 'isDefault',
    mapping: 'isDefault',
    type: 'bool',

    header: '当前组织',
    xtype: 'Boolean',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
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
    format: 'YYYY-MM-dd',
    sortable: true
  }];
})