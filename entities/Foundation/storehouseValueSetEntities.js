/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:04:28
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'CKJZ0001_SYS',
  name: '呵呵不知道填什么',
  dataState: '已审核',
  disabled: false
}]);