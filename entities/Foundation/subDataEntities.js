/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:21:17
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  categroy: '国家',
  code: 'China',
  name: '中国',
  dataState: '已审核',
  preset: true
}, {
  categroy: '国家',
  code: 'America',
  name: '美国',
  dataState: '已审核',
  preset: true
}])