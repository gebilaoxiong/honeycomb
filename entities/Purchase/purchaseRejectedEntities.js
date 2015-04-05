/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 22:15:54
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'CGTL000001',
  rejectDate:'2014/05/01',
  vendor:'威客休闲食品公司',
  shipperType:'业务组织',
  rejectOrg:'蓝海电子商务事业部',
  shipper:'蓝海电子商务事业部',
  dataState:'创建',
  materialCode: 'M00001',
  materialName: '啤酒',
  unit:'Pcs',
  rejectAmount: 12,
  warehouse: '电商总仓',
  warehousePos: ''
}]);