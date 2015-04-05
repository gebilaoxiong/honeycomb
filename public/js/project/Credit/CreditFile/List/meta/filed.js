/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:10
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
    //授信组织
    name: 'creditOrg',
    mapping: 'creditOrg',
    type: 'string',

    header: '授信组织',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //对象类型
    name: 'objectType',
    mapping: 'objectType',
    type: 'string',

    header: '对象类型',
    sortable: true
  }, {
    //日期
    name: 'date',
    mapping: 'date',
    type: 'date',
    dateFormat:'YYYY/MM/dd',

    header: '日期',
    xtype: 'Date',
    sortable: true
  }, {
    //信用对象
    name: 'creditObject',
    mapping: 'creditObject',
    type: 'string',

    header: '信用对象',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //币别
    name: 'currency',
    mapping: 'currency',
    type: 'string',

    header: '币别',
    sortable: true
  }, {
    //信用状态
    name: 'creditState',
    mapping: 'creditState',
    type: 'string',

    header: '信用状态',
    sortable: true
  }, {
    //信用等级
    name: 'creditLevel',
    mapping: 'creditLevel',
    type: 'string',

    header: '信用等级',
    sortable: true
  }, {
    //检查规则
    name: 'checkingRule',
    mapping: 'checkingRule',
    type: 'string',

    header: '检查规则',
    sortable: true
  }, {
    //信用额度
    name: 'creditLine',
    mapping: 'creditLine',
    type: 'float',

    header: '信用额度',
    xtype:'Number',
    sortable: true
  }, {
    //信用比例
    name: 'creditRatio',
    mapping: 'creditRatio',
    type: 'string',

    header: '信用比例%',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //授信部门
    name: 'creditDepartment',
    mapping: 'creditDepartment',
    type: 'string',

    header: '授信部门',
    sortable: true
  }];
})