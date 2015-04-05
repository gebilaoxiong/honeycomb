/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:16:47
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '华北区'
}, {
  name: '华南区'
}]);
