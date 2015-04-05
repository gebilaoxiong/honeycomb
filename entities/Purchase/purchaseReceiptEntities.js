/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 20:28:26
 * @description 
 */

var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'CGD0001',
  receiptDate: '2013/01/02',
  vendor: '长安制造',
  receiptOrg: '蓝海电子商务事业部',
  invalid: false,
  dataState: '已审核',
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  unit: '台',
  amount: 100,
  warehouse: '电子商务仓库',
  warehousePos:'1#'
}]);