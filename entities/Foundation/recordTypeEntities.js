/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 14:36:23
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  record: '现金存取单',
  code: 'XJCQ01_SYS',
  name: '存款',
  codeRult: '现金存取单标准编码规则',
  layout: '',
  controlPrint: false,
  auditedPrint: false,
  dataState: '已审核'
}, {
  record: '现金存取单',
  code: 'XJCQ02_SYS',
  name: '取款',
  codeRult: '现金存取单标准编码规则',
  layout: '',
  controlPrint: false,
  auditedPrint: false,
  dataState: '已审核'
}, {
  record: '销售报价单',
  code: 'XSBJD01_SYS',
  name: '标准销售报价单',
  codeRult: '销售报价单标准编码规则',
  layout: '',
  controlPrint: true,
  auditedPrint: false,
  dataState: '已审核'
}, {
  record: '销售出库单',
  code: 'XSCKD01_SYS',
  name: '标准销售出库单',
  codeRult: '销售出库单标准编码规则',
  layout: '标准销售出库单',
  controlPrint: false,
  auditedPrint: false,
  dataState: '已审核'
}, {
  record: '销售出库单',
  code: 'XSCKD02_SYS',
  name: '寄售出库单',
  codeRult: '销售出库单标准编码规则',
  layout: '寄售销售出库单',
  controlPrint: false,
  auditedPrint: false,
  dataState: '已审核'
}, {
  record: '零售出库单',
  code: 'XSCKD02_SYS',
  name: '寄售出库单',
  codeRult: '销售出库单标准编码规则',
  layout: '寄售销售出库单',
  controlPrint: false,
  auditedPrint: false,
  dataState: '已审核'
}])