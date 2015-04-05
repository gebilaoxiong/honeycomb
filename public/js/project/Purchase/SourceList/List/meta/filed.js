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
    name: 'purchaseOrg',
    mapping: 'purchaseOrg',
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
    //订货单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '订货单位',
    sortable: true
  }, {
    //供货商
    name: 'vendor',
    mapping: 'vendor',
    type: 'string',

    header: '供货商',
    sortable: true
  }, {
    //供货状态
    name: 'supplyStatus',
    mapping: 'supplyStatus',
    type: 'string',

    header: '供货状态',
    sortable: true
  }, {
    //供货类别
    name: 'supplyType',
    mapping: 'supplyType',
    type: 'string',

    header: '供货类别',
    sortable: true
  }, {
    //生效日
    name: 'effectDate',
    mapping: 'effectDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '生效日',
    xtype: 'Date',
    sortable: true
  }, {
    //失效日
    name: 'invalidDate',
    mapping: 'invalidDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '失效日',
    xtype: 'Date',
    sortable: true
  }, {
    //配额比例
    name: 'proportion',
    mapping: 'proportion',
    type: 'string',
    dateFormat: 'YYYY/MM/dd',

    header: '配额比例%',
    sortable: true
  }, {
    //配额顺序
    name: 'order',
    mapping: 'order',
    type: 'int',
    dateFormat: 'YYYY/MM/dd',

    header: '配额顺序',
    xtype: 'Number',
    sortable: true
  }];
})