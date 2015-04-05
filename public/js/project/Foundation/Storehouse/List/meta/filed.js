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
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  }, {
    //仓库地址
    name: 'address',
    mapping: 'address',
    type: 'string',

    header: '仓库地址',
    sortable: true
  }, {
    //仓库负责人
    name: 'manager',
    mapping: 'manager',
    type: 'string',

    header: '仓库负责人',
    sortable: true
  }, {
    //仓库属性
    name: 'attribute',
    mapping: 'attribute',
    type: 'string',

    header: '仓库属性',
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
  }, {
    //库存状态类型
    name: 'inventoryStateTypes',
    mapping: 'inventoryStateTypes',
    type: 'string',

    header: '库存状态类型',
    sortable: true
  }, {
    //允许负值
    name: 'allowNegative',
    mapping: 'allowNegative',
    type: 'bool',

    header: '允许负值',
    xtype: 'Boolean',
    sortable: true
  }, {
    //分组
    name: 'group',
    mapping: 'group',
    type: 'string',

    header: '分组',
    sortable: true
  }, {
    //默认库存状态
    name: 'defaultInventoryState',
    mapping: 'defaultInventoryState',
    type: 'string',

    header: '默认库存状态',
    sortable: true
  }, {
    //默认收料状态
    name: 'defaultReceiveState',
    mapping: 'defaultReceiveState',
    type: 'string',

    header: '默认收料状态',
    sortable: true
  }, {
    //启用仓位管理
    name: 'enablePositionManagement',
    mapping: 'enablePositionManagement',
    type: 'bool',

    header: '启用仓位管理',
    xtype: 'Boolean',
    sortable: true
  }]
})