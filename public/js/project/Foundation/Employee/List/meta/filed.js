/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-25 14:43:36
 * @description
 */
define(['util/GridColumnRenderer'],function(GridColumnRenderer) {
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
    //姓名
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '员工姓名',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //员工编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '员工编号',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //主任岗位
    name: 'postName',
    mapping: 'postName',
    type: 'string',

    header: '主任岗位',
    sortable: true
  }, {
    //主任岗开始时间
    name: 'dutyTime',
    mapping: 'dutyTime',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '主任岗位开始时间',
    xtype: 'Date',
    sortable: true
  }, {
    //任职状态
    name: 'dutyState',
    mapping: 'dutyState',
    type: 'bool',

    header: '任岗状态',
    xtype: 'Boolean',
    sortable: true
  }, {
    //移动电话
    name: 'mobile',
    mapping: 'mobile',
    type: 'string',

    header: '移动电话',
    sortable: true
  }, {
    //固定电话
    name: 'telephone',
    mapping: 'telephone',
    type: 'string',

    header: '固定电话',
    sortable: true
  }, {
    //创建组织
    name: 'createOrg',
    mapping: 'createOrg',
    type: 'string',

    header: '创建组织',
    sortable: true
  }, {
    //使用组织
    name: 'useOrg',
    mapping: 'useOrg',
    type: 'string',

    header: '使用组织',
    sortable: true
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true,
    renderer:GridColumnRenderer.dataState
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