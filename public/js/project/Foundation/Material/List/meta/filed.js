/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-03 23:28:01
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
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //存货类别
    name: 'category',
    mapping: 'category',
    type: 'string',

    header: '物料类别',
    /*是否生成列*/
    isColumn: false,
    filterable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //规格
    name: 'specification',
    mapping: 'specification',
    type: 'string',

    header: '规格型号',
    sortable: true
  }, {
    //物料属性
    name: 'attribute',
    mapping: 'attribute',
    type: 'string',

    header: '物料属性',
    sortable: true
  }, {
    //基本单位
    name: 'baseUnit',
    mapping: 'baseUnit',

    header: '基本单位',
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
  }];
})