/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 00:09:30
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '增值税专用发票'
}, {
  name: '普通发票'
}]);
