/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 00:57:35
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;



entities = module.exports = new Entities([{
  code: 'GWHB00001',
  name:'临时物料价目表',
  currency:'美元',
  effectDate:'1999/01/01',
  invalidDate:'2018/09/01',
  dataState:'已审核',
  salesOrg:'蓝海机械总公司',
  hasTax:false,
  priceObject:'物料',
  priceType:''
}])
