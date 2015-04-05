/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 18:38:28
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  name: '中国税制',
  code: 'SSZD01_SYS',
  region: '中国',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}])