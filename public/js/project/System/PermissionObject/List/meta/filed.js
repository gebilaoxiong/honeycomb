/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:28:23
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
    //子系统
    name: 'subSystem',
    mapping: 'subSystem',
    type: 'string',

    header: '子系统',
    sortable: true
  }, {
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',
    width: 200,

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
    width: 150,

    header: '名称',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //系统预制
    name: 'perset',
    mapping: 'perset',
    type: 'bool',

    header: '系统预制',
    xtype: 'Boolean',
    sortable: true
  }];
})