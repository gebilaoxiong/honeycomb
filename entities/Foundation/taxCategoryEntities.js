/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 18:47:06
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'SSZD01_SYS',
  name: '增值税',
  taxSystem: '中国税制',
  taxCurrency: '人民币',
  allowRewriteTaxRate: true,
  allowRewriteAndInputTax: true,
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false,
  preset: true
}])