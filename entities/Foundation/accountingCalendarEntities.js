/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 16:33:11
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'KJRL01_SYS',
  name: '系统预设会计日历',
  startDate: '2012/1/1',
  endingDate: '2014/12/31',
  startAnnual: 2012,
  periodType: '自然月',
  dataState: '已审核',
  disabled: false,
  preset: true
}]);