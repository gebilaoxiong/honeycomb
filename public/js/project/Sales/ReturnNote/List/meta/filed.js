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
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //退货客户
    name: 'customer',
    mapping: 'customer',
    type: 'string',

    header: '退货客户',
    sortable: true
  }, {
    //库存组织
    name: 'inventoryOrg',
    mapping: 'inventoryOrg',
    type: 'string',

    header: '库存组织',
    sortable: true
  },{
    //库存部门
    name: 'inventoryDepartment',
    mapping: 'inventoryDepartment',
    type: 'string',

    header: '库存部门',
    sortable: true
  },  {
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
    //规格型号
    name: 'specification',
    mapping: 'specification',
    type: 'string',

    header: '规格型号',
    sortable: true
  }, {
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //数量
    name: 'amount',
    mapping: 'amount',
    type: 'float',

    header: '数量',
    xtype:'Number',
    sortable: true
  },{
    //退货类型
    name: 'returnType',
    mapping: 'returnType',
    type: 'string',

    header: '退货类型',
    sortable: true
  }];
})