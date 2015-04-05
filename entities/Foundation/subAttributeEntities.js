/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:07:33
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  name: '等级',
  code: '001',
  valueType: '辅助资料',
  source: '等级',
  dataState: '已审核',
  disabled: false
}, {
  name: '产地',
  code: '002',
  valueType: '辅助资料',
  source: '产地',
  dataState: '已审核',
  disabled: false
}])