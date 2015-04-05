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
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  }, {
    //类型
    name: 'category',
    mapping: 'category',
    type: 'string',

    header: '类型',
    sortable: true
  },{
    //性别
    name: 'sex',
    mapping: 'sex',
    type: 'string',

    header: '性别',
    sortable: true
  },{
    //电话
    name: 'tell',
    mapping: 'tell',
    type: 'string',

    header: '电话',
    sortable: true
  }, {
    //手机
    name: 'mobile',
    mapping: 'mobile',
    type: 'string',

    header: '手机',
    sortable: true
  },{
    //传真
    name: 'fax',
    mapping: 'fax',
    type: 'string',

    header: '传真',
    sortable: true
  },{
    //所属公司
    name: 'company',
    mapping: 'company',
    type: 'string',

    header: '所属公司',
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
