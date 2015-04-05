/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 16:08:11
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'CGD0001',
  purchaseDate: '2013/1/2',
  vendor: '长安制造',
  dataState: '已审核',
  applyOrg: '蓝海电子商务事业部',
  closed: false,
  invalid: false,
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  unit: '台',
  amount: 100,
  receiptDate: '2014/07/13',
  isGift: false
}]);