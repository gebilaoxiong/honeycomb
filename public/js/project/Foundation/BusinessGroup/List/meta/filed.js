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
    //业务组编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '业务组编码',
    xtype: 'Link',
    sortable: true
  }, {
    //业务组名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '业务组名称',
    sortable: true
  },{
    //业务组类型
    name: 'type',
    mapping: 'type',
    type: 'string',

    header: '业务组类型',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  },  {
    //描述
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '描述',
    sortable: true
  }, {
    //业务组织
    name: 'org',
    mapping: 'org',
    type: 'string',

    header: '业务组织',
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
