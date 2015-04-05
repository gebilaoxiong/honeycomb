/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:37:04
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
    //权限项组
    name: 'group',
    mapping: 'group',
    type: 'string',

    header: '权限项组',
    sortable: true
  },  {
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',
    width:200,

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
    width:150,

    header: '名称',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //描述
    name: 'description',
    mapping: 'description',
    type: 'string',
    width:200,

    header: '描述',
    sortable: true
  }, {
    //系统预制
    name: 'preset',
    mapping: 'preset',
    type: 'bool',

    header: '系统预制',
    xtype: 'Boolean',
    sortable: true
  }];
})
