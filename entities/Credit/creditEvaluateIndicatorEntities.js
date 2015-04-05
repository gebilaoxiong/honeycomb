/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 16:12:40
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code:'1.1.1',
  name:'整体印象',
  description:'由评估人员根据企业整体印象评分',
  superIndicator:'品质特性评价',
  indicatorType:'定性',
  criterion:'成立三年以上，公司规模较大：4分',
  actualValueFloor:0,
  actualValueCeiling:0,
  score:4,
  note:''
}]);
