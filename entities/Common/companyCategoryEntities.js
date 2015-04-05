/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:26:17
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '制造商'
}, {
  name: '分销商'
}, {
  name: '运输商'
}]);
