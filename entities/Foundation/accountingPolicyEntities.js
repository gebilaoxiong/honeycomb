/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 17:12:49
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: '002',
  name: '中国税务政策',
  standardCurrency: '人民币',
  accountingCalendar: '系统预设会计日历',
  accountingElementsTable: '中国大陆会计要素表',
  exchangeRate: '固定汇率',
  dataState: '已审核',
  disabled: false,
  preset: false
}, {
  code: 'KJZC01_SYSY',
  name: '中国准则会计政策',
  standardCurrency: '人民币',
  accountingCalendar: '系统预设会计日历',
  accountingElementsTable: '中国大陆会计要素表',
  exchangeRate: '固定汇率',
  dataState: '已审核',
  disabled: false,
  preset: true
}]);