/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 01:29:43
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '战略供应商'
}, {
  name: '优先供应商'
}, {
  name: '考察供应商'
}]);
