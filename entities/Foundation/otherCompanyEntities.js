/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 18:00:11
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'QTWL0001',
  name: '中国工商银行南山支行',
  dataState: '已审核',
  disabled: false
}, {
  code: 'QTWL0002',
  name: '深圳市地税局',
  dataState: '已审核',
  disabled: false
}]);