/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 20:48:30
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'CGRK00001',
  storageDate: '2014/02/16',
  vendor: '威客休闲食品公司',
  invalid: false,
  dataState: '已审核',
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  unit: '台',
  amount: 200,
  receiptAmount: 200,
  warehouse: '电商总仓'
}]);