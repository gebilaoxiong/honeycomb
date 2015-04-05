/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 17:32:25
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'BG0001',
  vendor: '长安制造',
  dataState: '已审核',
  purchaseOrg: '蓝海电子商务事业部',
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  specification: '50KW',
  unit: '台',
  amount: 200,
  receiptDate: '2014/11/06',
  price: 2000,
  orderCode: 'CGD0001'
}]);