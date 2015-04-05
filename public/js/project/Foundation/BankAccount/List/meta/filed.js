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
    //银行账号
    name: 'account',
    mapping: 'account',
    type: 'string',

    header: '银行账号',
    XType: 'Link',
    sortable: true
  }, {
    //账号名称
    name: 'accountName',
    mapping: 'accountName',
    type: 'string',

    header: '账号名称',
    sortable: true
  }, {
    //开户银行
    name: 'depositBank',
    mapping: 'depositBank',
    type: 'string',

    header: '开户银行',
    sortable: true
  }, {
    //银行
    name: 'bank',
    mapping: 'bank',
    type: 'string',

    header: '银行',
    sortable: true
  }, {
    //资金上划
    name: 'handInMoney',
    mapping: 'handInMoney',
    type: 'bool',

    header: '资金上划',
    xtype: 'Boolean',
    sortable: true
  }, {
    //上划方式
    name: 'handInType',
    mapping: 'handInType',
    type: 'string',

    header: '上划方式',
    sortable: true
  }, {
    //上划定额
    name: 'handInMoney',
    mapping: 'handInMoney',
    type: 'float',

    header: '上划定额',
    type: 'Number',
    sortable: true
  }, {
    //留底余额
    name: 'balance',
    mapping: 'balance',
    type: 'float',

    header: '留底余额',
    type: 'Number',
    sortable: true
  }, {
    //最小上划金额
    name: 'minHandInMoney',
    mapping: 'minHandInMoney',
    type: 'float',

    header: '最小上划金额',
    type: 'Number',
    sortable: true
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',

    header: '数据状态',
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
    //账户收支属性
    name: 'accountAttribute',
    mapping: 'accountAttribute',
    type: 'string',

    header: '账户收支属性',
    sortable: true
  }, {
    //内部账户
    name: 'internalAccount',
    mapping: 'internalAccount',
    type: 'string',

    header: '内部账户',
    sortable: true
  }, {
    //支持网银
    name: 'ebank',
    mapping: 'eBank',
    type: 'bool',

    header: '支持网银',
    xtype: 'Boolean',
    sortable: true
  }];
})