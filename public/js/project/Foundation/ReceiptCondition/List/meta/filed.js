/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define(function() {
  return [{
    //id
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
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    width:230,
    sortable: true
  }, {
    //多到期日设置标准
    name: 'maturityStandard',
    mapping: 'maturityStandard',
    type: 'string',

    header: '多到期日设置标准',
    sortable: true
  }, {
    //到期日计算日期
    name: 'maturityDate',
    mapping: 'maturityDate',

    header: '到期日计算日期',
    sortable: true
  },{
    //描述
    name: 'description',
    mapping: 'description',

    header: '描述',
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
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }];
})
