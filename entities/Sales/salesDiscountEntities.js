/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 00:56:20
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code:'XSZKB0001',
  name: '批发折扣',
  effectDate:'2014/05/06',
  invalidDate:'2100/01/01',
  applicationLayer:'分目录',
  invalid:false,
  salesOrg:'蓝海食品集团有限公司',
  currency:'人民币',
  discountObject:'物料'
}])
