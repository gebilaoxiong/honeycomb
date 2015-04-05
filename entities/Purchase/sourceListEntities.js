/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 23:25:23
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  purchaseOrg: '蓝海食品集团有限公司',
  code: 'CGML0001',
  name: '我要退货',
  materialCode: 'M00001',
  materialName: '啤酒',
  unit: 'PSC',
  vendor: '西安生物',
  supplyStatus: '正常供货',
  supplyType: '采购',
  effectDate: '2014/07/12',
  invalidDate: '2100/01/01',
  proportion: undefined,
  order: 1
}]);