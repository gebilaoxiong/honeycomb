/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 19:43:17
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  date:'2014/07/12',
  code:'XSBJD0001',
  customer:'伊利集团有限公司',
  salesDepartment:'销售部',
  dataState:'已审核',
  materialCode:'002',
  materialName:'牛奶',
  unit:'Pcs',
  amount:1000,
  price:19417.48,
  taxPrice:20000,
  money:19417480,
  total:20000000
},{
  date:'2014/07/12',
  code:'XSBJD0002',
  customer:'伊利集团有限公司',
  salesDepartment:'销售部',
  dataState:'已审核',
  materialCode:'003',
  materialName:'三聚氰胺',
  unit:'Pcs',
  amount:1000,
  price:19417.48,
  taxPrice:20000,
  money:19417480,
  total:20000000
}]);
