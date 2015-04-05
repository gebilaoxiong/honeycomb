/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 01:54:47
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '试用供方'
}, {
  name: '合格供应商'
}, {
  name: '优秀供应商'
}, {
  name: '战略供应商'
}]);
