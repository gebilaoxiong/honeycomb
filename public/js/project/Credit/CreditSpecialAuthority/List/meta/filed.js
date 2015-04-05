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
    //特批人
    name: 'signer',
    mapping: 'signer',
    type: 'string',

    header: '特批人',
    sortable: true
  }, {
    //币别
    name: 'currency',
    mapping: 'currency',
    type: 'string',

    header: '币别',
    sortable: true
  }, {
    //允许特批额度
    name: 'allowSpecialLine',
    mapping: 'allowSpecialLine',
    type: 'float',

    header: '允许特批额度',
    xtype: 'Number',
    sortable: true
  }, {
    //允许特批天数
    name: 'allowSpecialDays',
    mapping: 'allowSpecialDays',
    type: 'int',

    header: '允许特批天数',
    xtype: 'Number',
    sortable: true
  }, {
    //单据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '单据状态',
    sortable: true
  }, {
    //审核人
    name: 'auditor',
    mapping: 'auditor',
    type: 'string',

    header: '审核人',
    sortable: true
  }, {
    //审核日期
    name: 'auditDate',
    mapping: 'auditDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '审核日期',
    xtype: 'Date',
    format: 'YYYY-MM-dd',
    sortable: true
  }];
})