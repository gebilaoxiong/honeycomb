/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 00:00:37
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '小规模纳税人'
}, {
  name: '一般纳税人'
}]);
