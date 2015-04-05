/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-15 01:14:36
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '标准税率'
}, {
  name: '减免税率'
}, {
  name: '零税率'
}, {
  name: '免税'
}]);
