/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 22:05:58
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '中国'
}, {
  name: '美国'
}]);