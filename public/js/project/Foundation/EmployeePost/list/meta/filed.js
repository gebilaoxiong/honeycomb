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
    //员工
    name: 'employeeName',
    mapping: 'employeeName',
    type: 'string',

    header: '员工',
    sortable: true
  }, {
    //员工编号
    name: 'employeeCode',
    mapping: 'employeeCode',
    type: 'string',

    header: '员工编号',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //部门名称
    name: 'departmentName',
    mapping: 'departmentName',
    type: 'string',

    header: '所属部门',
    sortable: true
  }, {
    //就任岗位
    name: 'postName',
    mapping: 'postName',
    type: 'string',

    header: '就任岗位',
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