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
    //默认折扣表
    name: 'isDefault',
    mapping: 'isDefault',
    type: 'bool',

    header: '默认折扣表',
    xtype: 'Boolean',
    sortable: true
  }, {
    //单据编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '单据编号',
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
    //折扣对象
    name: 'discountObject',
    mapping: 'discountObject',
    type: 'string',

    header: '折扣对象',
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
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //物料编码
    name: 'materialCode',
    mapping: 'materialCode',
    type: 'string',

    header: '物料编码',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
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
    //从
    name: 'start',
    mapping: 'start',
    type: 'float',

    header: '从',
    xtype: 'Number',
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
    //计算方式
    name: 'computeMode',
    mapping: 'computeMode',
    type: 'string',

    header: '计算方式',
    sortable: true
  }, {
    //折扣率(%)
    name: 'discountRate',
    mapping: 'discountRate',
    type: 'string',

    header: '折扣率(%)',
    sortable: true
  }, {
    //折扣额
    name: 'discountAmount',
    mapping: 'discountAmount',
    type: 'string',

    header: '折扣额',
    sortable: true
  }];
})