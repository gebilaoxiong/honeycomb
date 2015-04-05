/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:44
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
    name: 'record',
    mapping: 'record',
    type: 'string',

    header: '单据',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true
  }, {
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    name: 'codeRult',
    mapping: 'codeRult',
    type: 'string',

    header: '编码规则',
    sortable: true
  }, {
    //默认单据类型
    name: 'isDefault',
    mapping: 'isDefault',
    type: 'bool',

    header: '默认单据类型',
    xtype: 'Boolean',
    sortable: true
  }, {
    //单据布局方案
    name: 'layout',
    mapping: 'layout',
    type: 'string',

    header: '单据布局方案',
    sortable: true
  }, {
    //控制打印次数
    name: 'controlPrint',
    mapping: 'controlPrint',
    type: 'bool',

    header: '控制打印次数',
    xtype: 'Boolean',
    sortable: true
  }, {
    //审核后才允许打印
    name: 'auditedPrint',
    mapping: 'auditedPrint',
    type: 'bool',

    header: '审核后才允许打印',
    xtype: 'Boolean',
    sortable: true
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }]
})