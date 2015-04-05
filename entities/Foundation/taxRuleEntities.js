/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 21:56:29
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  useOrg: '销售公司',
  resultSource: '物料的税率',
  code: 'SWGZ01_SYS',
  name: '销售业务税率-物料',
  taxSystem: '中国税制',
  effectDate: '1993/8/3',
  invalidDate: '9999/12/31',
  memoni: '',
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  useOrg: '销售公司',
  resultSource: '供应商的税率',
  code: 'SWGZ02_SYS',
  name: '采购业务税率-供应商',
  taxSystem: '中国税制',
  effectDate: '1993/8/3',
  invalidDate: '9999/12/31',
  memoni: '',
  dataState: '已审核',
  disabled: false,
  preset: true
}])