/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 02:55:01
 * @description 
 */

var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '公司'
}, {
  name: '个人'
}]);
