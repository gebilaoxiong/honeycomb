/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 13:07:02
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'WTD000001',
  name: 'fdsghsdf',
  effectDate: '2014/1/6',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}, {
  code: 'WTD000002',
  name: '默认模板',
  effectDate: '1993/8/8',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}])