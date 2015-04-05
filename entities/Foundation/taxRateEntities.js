/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 18:55:57
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  id: 1,
  code: 'SL01_SYS',
  name: '17%增值税',
  taxRate: 17.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  id: 2,
  code: 'SL02_SYS',
  name: '13%增值税',
  taxRate: 13.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  id: 3,
  code: 'SL03_SYS',
  name: '7%增值税',
  taxRate: 7.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  id: 4,
  code: 'SL04_SYS',
  name: '零税额的增值税',
  taxRate: 0.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  id: 5,
  code: 'SL05_SYS',
  name: '11%增值税',
  taxRate: 11.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  id: 6,
  code: 'SL06_SYS',
  name: '6%增值税',
  taxRate: 6.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}, {
  id: 7,
  code: 'SL07_SYS',
  name: '3%增值税',
  taxRate: 3.00,
  taxSystem: '中国税制',
  taxCategory: '增值税',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  isAddedValueTax: true,
  dataState: '已审核',
  disabled: false,
  preset: true
}])