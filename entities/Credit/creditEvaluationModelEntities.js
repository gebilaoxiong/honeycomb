/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 17:16:31
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code:'FA001_SYS',
  name:'预设信用评估方案',
  date:'2013/01/01',
  total:100,
  dataState:'已审核',
  indicatorCode:'1.1',
  indicatorName:'品质特性评价',
  indicatorCriterion:'',
  weight:19,
}]);
