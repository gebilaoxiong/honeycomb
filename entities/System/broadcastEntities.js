/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:42:16
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  title:'测试消息',
  content:'这条消息是测试的',
  invalidDate:'2014/1/1 18:00:00',
  createDate:'2014/1/1 17:00:00'
}])
