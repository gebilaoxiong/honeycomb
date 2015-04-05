/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:42:02
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '特大型企业'
}, {
  name: '大型企业'
}, {
  name: '中小型企业'
}, {
  name: '小型企业'
}]);

