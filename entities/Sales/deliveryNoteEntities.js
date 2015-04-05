/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 23:06:23
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  date: '2014/07/12',
  code:'FHTZDD0001',
  customer: '伊利集团有限公司',
  deliveryOrg: '蓝海食品集团有限公司',
  dataState: '已审核',
  materialCode: '002',
  materialName: '牛奶',
  unit:'Psc',
  amount:500,
  deliveryStorehouse:'电子商务仓库'
}])
