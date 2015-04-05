/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 00:39:28
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code:'XSJMB0001',
  name: '沃尔玛价目表',
  currency: '人民币',
  effectDate:'2014/05/06',
  invalidDate:'2100/01/01',
  dataState: '已审核',
  salesOrg:'蓝海食品集团有限公司',
  hasTax:true,
  priceObject:'按物料',
  priceType:'土豪价'
},{
  code:'XSJMB0002',
  name: '批发价目表',
  currency: '人民币',
  effectDate:'2014/05/06',
  invalidDate:'2100/01/01',
  dataState: '已审核',
  salesOrg:'蓝海食品集团有限公司',
  hasTax:true,
  priceObject:'按物料',
  priceType:''
}])
