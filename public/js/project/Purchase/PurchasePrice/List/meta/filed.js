/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:17
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
    //采购组织
    name: 'receiptOrg',
    mapping: 'receiptOrg',
    type: 'string',

    header: '采购组织',
    sortable: true
  }, {
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

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

    header: '名称',
    sortable: true
  }, {
    //价目表对象
    name: 'priceObject',
    mapping: 'priceObject',
    type: 'string',

    header: '价目表对象',
    sortable: true
  }, {
    //币别
    name: 'currency',
    mapping: 'currency',
    type: 'string',

    header: '币别',
    sortable: true
  }, {
    //供应商
    name: 'vendor',
    mapping: 'vendor',
    type: 'string',

    header: '供应商',
    sortable: true
  }, {
    //状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '状态',
    sortable: true
  }, {
    //含税
    name: 'includeTax',
    mapping: 'includeTax',
    type: 'bool',

    header: '含税',
    xtype: 'Boolean',
    sortable: true
  }, {
    //默认价目表
    name: 'isDefault',
    mapping: 'isDefault',
    type: 'bool',

    header: '默认价目表',
    xtype: 'Boolean',
    sortable: true
  }, {
    //物料编码
    name: 'materialCode',
    mapping: 'materialCode',
    type: 'string',

    header: '物料编码',
    sortable: true
  }, {
    //物料名称
    name: 'materialName',
    mapping: 'materialName',
    type: 'string',

    header: '物料名称',
    sortable: true
  }, {
    //计价单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '计价单位',
    sortable: true
  }, {
    //至
    name: 'until',
    mapping: 'until',
    type: 'float',

    header: '至',
    xtype: 'Number',
    sortable: true
  }, {
    //单价
    name: 'price',
    mapping: 'price',
    type: 'float',

    header: '单价',
    xtype: 'Number',
    sortable: true
  }, {
    //含税单价
    name: 'taxPrice',
    mapping: 'taxPrice',
    type: 'float',

    header: '含税单价',
    xtype: 'Number',
    sortable: true
  }, {
    //税率
    name: 'taxRate',
    mapping: 'taxRate',
    type: 'float',

    header: '税率%',
    xtype: 'Number',
    sortable: true
  }, {
    //价格下限
    name: 'priceFloor',
    mapping: 'priceFloor',
    type: 'float',

    header: '价格下限',
    xtype: 'Number',
    sortable: true
  }, {
    //价格上限
    name: ' priceCeiling',
    mapping: ' priceCeiling',
    type: 'float',

    header: '价格上限',
    xtype: 'Number',
    sortable: true
  }];
})