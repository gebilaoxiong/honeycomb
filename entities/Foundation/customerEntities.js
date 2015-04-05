/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 22:29:01
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  useOrg: '蓝海柴油机公司',
  code: 'CUST0001',
  name: '东方机械',
  auditor: 'demo',
  auditDate: '2010/01/01',
  dataState: '已审核',
  disabled: false
}, {
  useOrg: '蓝海柴油机公司',
  code: 'CUST0002',
  name: '大宇机械',
  Approver: 'demo',
  ApprovedDate: '2010/01/02',
  dataState: '已审核',
  disabled: false
}, {
  useOrg: '蓝海柴油机公司',
  code: 'CUST0003',
  name: '蓝海柴油机公司',
  Approver: 'demo',
  ApprovedDate: '2010/01/03',
  dataState: '已审核',
  disabled: false
}, {
  useOrg: '蓝海柴油机公司',
  code: 'CUST0004',
  name: '销售公司',
  Approver: 'demo',
  ApprovedDate: '2010/01/04',
  dataState: '已审核',
  disabled: false
}, {
  useOrg: '蓝海柴油机公司',
  code: 'CUST0005',
  name: '深圳销售公司',
  Approver: 'demo',
  ApprovedDate: '2010/01/05',
  dataState: '已审核',
  disabled: false
}, {
  useOrg: '蓝海柴油机公司',
  code: 'CUST0005',
  name: '总装事业部',
  Approver: 'demo',
  ApprovedDate: '2010/01/05',
  dataState: '已审核',
  disabled: false
}]);