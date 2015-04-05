/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:12:11
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'PRE0001',
  name: '人民币',
  currencyCode: 'CNY',
  showSymbol: false,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}, {
  code: 'PRE0002',
  name: '香港元',
  currencyCode: 'HKD',
  showSymbol: true,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}, {
  code: 'PRE0003',
  name: '欧元',
  currencyCode: 'EUR',
  showSymbol: true,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}, {
  code: 'PRE0004',
  name: '日本日元',
  currencyCode: 'JPY',
  showSymbol: true,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}, {
  code: 'PRE0005',
  name: '新台币元',
  currencyCode: 'TWD',
  showSymbol: true,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}, {
  code: 'PRE0006',
  name: '英镑',
  currencyCode: 'GBP',
  showSymbol: true,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}, {
  code: 'PRE0007',
  name: '美元',
  currencyCode: 'USD',
  showSymbol: true,
  unitPrecision: 6,
  precision: 2,
  dataState: '已审核',
  disabled: false
}]);