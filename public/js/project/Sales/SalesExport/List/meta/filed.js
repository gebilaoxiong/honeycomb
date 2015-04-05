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
    //日期
    name: 'date',
    mapping: 'date',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '日期',
    xtype: 'Date',
    sortable: true
  }, {
    //单据编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '单据编号',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //客户
    name: 'customer',
    mapping: 'customer',
    type: 'string',

    header: '客户',
    sortable: true
  }, {
    //发货组织
    name: 'deliveryOrg',
    mapping: 'deliveryOrg',
    type: 'string',

    header: '发货组织',
    sortable: true
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
    sortable: true
  }, {
    //物料名称
    name: 'materialName',
    mapping: 'materialName',
    type: 'string',

    header: '物料名称',
    sortable: true
  }, {
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //实发数量
    name: 'actualAmount',
    mapping: 'actualAmount',
    type: 'string',

    header: '实发数量',
    sortable: true
  }, {
    //检验确认
    name: 'verified',
    mapping: 'verified',
    type: 'bool',

    header: '检验确认',
    xtype: 'Boolean',
    sortable: true
  }, {
    //仓库
    name: 'storehouse',
    mapping: 'storehouse',
    type: 'string',

    header: '仓库',
    sortable: true
  }];
})