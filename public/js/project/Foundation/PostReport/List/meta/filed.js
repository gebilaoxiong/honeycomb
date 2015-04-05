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
    //岗位
    name: 'postName',
    mapping: 'postName',
    type: 'string',

    header: '岗位',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true
  }, {
    //所属组织
    name: 'org',
    mapping: 'org',
    type: 'string',

    header: '所属组织',
    sortable: true
  }, {
    //所属部门
    name: 'departmentName',
    mapping: 'departmentName',
    type: 'string',

    header: '所属部门',
    sortable: true
  },{
    //部门全称
    name: 'departmentFullName',
    mapping: 'departmentFullName',
    type: 'string',

    header: '部门全称',
    width:180,
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