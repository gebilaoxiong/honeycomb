/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 01:37:48
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;
  
entities = module.exports = new Entities([{
  name: '采购'
}, {
  name: '委外'
}, {
  name: '服务'
}, {
  name: '综合'
}]);
