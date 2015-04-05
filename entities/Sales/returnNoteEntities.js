/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 00:04:47
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  date: '2014/07/12',
  code:'THTZD0001',
  dataState: '已审核',
  customer: '伊利集团有限公司',
  inventoryOrg: '蓝海食品集团有限公司',
  inventoryDepartment:'销售部',
  materialCode: '002',
  materialName: '牛奶',
  specification:'50ml',
  unit:'Psc',
  amount:500,
  returnType:'全款退货'
}])
