/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 00:18:07
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  receiptOrg: '蓝海食品集团有限公司',
  isDefault:false,
  code: 'CGJM000001',
  name: '柴油机打折',
  discountObject: '物料',
  currency: '人民币',
  vendor: '长安制造',
  dataState: '创建',
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  unit: '台',
  start:100,
  until:200,
  computeMode:'折扣率',
  discountRate: 10,
  discountAmount: 0
}]);
