/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 16:52:38
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: '001',
  name: '中国工商银行南山支行(人民币户)',
  bank: '',
  dataState: '已审核',
  disabled: false
}, {
  code: '002',
  name: '中国银行南山支行(美元户)',
  bank: '',
  dataState: '已审核',
  disabled: false
}]);