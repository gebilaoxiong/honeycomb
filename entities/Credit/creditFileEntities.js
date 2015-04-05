/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 14:48:02
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  creditOrg: '蓝海食品集团有限公司',
  objectType:'客户',
  date:'2014/06/26',
  creditObject:'深圳一级代理',
  currency:'人民币',
  creditState:'正常检查',
  creditLevel:'AAA',
  checkingRule:'预设标准规则',
  creditLine:0,
  creditRatio:undefined,
  dataState:'已审核',
  creditDepartment:''
}]);
