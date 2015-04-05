/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 23:49:46
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  receiptOrg: '蓝海食品集团有限公司',
  code: 'CGJM000001',
  name: '采购订单',
  priceObject: '按物料',
  currency: '人民币',
  vendor: '长安制造',
  dataState: '创建',
  includeTax: true,
  isDefault: false,
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  unit: '台',
  until: 1,
  price: 12000,
  taxPrice: 12000,
  taxRate: 0,
  priceFloor: 12000,
  priceCeiling: 12000
}]);