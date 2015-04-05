/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 16:22:22
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  directRate: 6.2000,
  IndirectRate: 0.1613,
  type: '固定汇率',
  originalCurrency: '美元',
  destinationCurrency: '人民币',
  effectDate: '2013/12/1',
  invalidDate: '2013/12/20',
  dataState: '已审核',
  disabled: false,
  preset: false
}, {
  directRate: 6.3000,
  IndirectRate: 0.1587,
  type: '固定汇率',
  originalCurrency: '美元',
  destinationCurrency: '人民币',
  effectDate: '2013/12/11',
  invalidDate: '2013/12/20',
  dataState: '已审核',
  disabled: false,
  preset: false
}, {
  directRate: 6.5000,
  IndirectRate: 0.1538,
  type: '固定汇率',
  originalCurrency: '美元',
  destinationCurrency: '人民币',
  effectDate: '2013/12/21',
  invalidDate: '2013/12/31',
  dataState: '已审核',
  disabled: false,
  preset: false
}])