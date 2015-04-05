/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 01:40:41
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'L',
  name: '升',
  isBasicUnit: true,
  dataState: '已审核'
}, {
  code: 'ml',
  name: '毫升',
  isBasicUnit: false,
  dataState: '已审核'
}]);