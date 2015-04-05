/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:26:53
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
    //部门分组
    name: 'departmentGroup',
    mapping: 'departmentGroup',
    type: 'string',

    header: '部门分组',
    sortable: true
  }, {
    //用户账号
    name: 'account',
    mapping: 'account',
    type: 'string',

    header: '用户账号',
    width: 150,
    sortable: true
  }, {
    //用户名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '用户名称',
    width: 180,
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //用户说明
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '用户说明',
    width: 200,
    sortable: true
  }];
})