/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 00:25:21
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  date: '2014/07/12',
  code:'XSTHD0001',
  dataState: '已审核',
  customer: '伊利集团有限公司',
  inventoryOrg: '蓝海食品集团有限公司',
  inventoryDepartment:'销售部',
  materialCode: '002',
  materialName: '牛奶',
  specification:'50ml',
  unit:'Psc',
  actualAmount:500,
  returnType:'全款退货',
  storehouse:'电子商务仓库',
  storehousePos:'',
  inventoryStatus:''
}])
