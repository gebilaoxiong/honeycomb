/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
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
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true
  }, {
    //形态
    name: 'orgType',
    mapping: 'orgType',
    type: 'string',

    header: '形态',
    sortable: true
  }, {
    //核算组织
    name: 'isAccountOrg',
    mapping: 'isAccountOrg',
    type: 'bool',

    header: '核算组织',
    xtype:'Boolean',
    sortable: true
  }, {
    //核算组织类型
    name: 'accountOrgType',
    mapping: 'accountOrgType',
    type: 'string',

    header: '核算组织类型',
    sortable: true
  }, {
    //所属法人
    name: 'corporation',
    mapping: 'corporation',
    type: 'string',

    header: '所属法人',
    sortable: true
  }, {
    //业务组织
    name: 'isBusiness',
    mapping: 'isBusiness',
    type: 'bool',

    header: '业务组织',
    xtype:'Boolean',
    sortable: true
  },{
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
    sortable: true
  }];
})
