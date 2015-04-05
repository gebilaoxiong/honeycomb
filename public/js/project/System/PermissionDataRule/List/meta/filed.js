/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:45:41
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
    //业务对象
    name: 'permissionObject',
    mapping: 'permissionObject',
    type: 'string',

    header: '业务对象',
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
    //禁用状态
    name: 'disabled',
    mapping: 'disabled',
    type: 'bool',
    width:200,

    header: '禁用状态',
    xtype: 'Boolean',
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

