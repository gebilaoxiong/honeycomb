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
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    name: 'taxRateName',
    mapping: 'taxRateName',
    type: 'string',

    header: '税率',
    sortable: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  }, {
    //存货成本类别
    name: 'inventoryCost',
    mapping: 'inventoryCost',
    type: 'string',

    header: '存货成本类别',
    sortable: true
  }, {
    //描述
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '描述',
    sortable: true,
    width:180
  }, {
    //是否默认
    name: 'isDefault',
    mapping: 'isDefault',
    type: 'bool',

    header: '是否默认',
    xtype: 'Boolean',
    sortable: true
  }];
})