/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 01:06:06
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'XSTJFA0001',
  date: '2014/05/06',
  name: '批发折扣',
  dataState: '已审核',
  salesOrg: '蓝海食品集团有限公司',
  name: '批发价调整',
  salesPrice: '批发价目表',
  salesPriceObject: '按物料',
  currency: '人民币',
  effectDate: '2014/05/06',
  invalidDate: '2100/01/01'
}])