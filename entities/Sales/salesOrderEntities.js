/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 21:45:16
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  date: '2014/07/12',
  code: 'XSBJD0001',
  dataState: '已审核',
  customer: '伊利集团有限公司',
  salesDepartment: '销售部',
  closed: false,
  materialCode: '002',
  materialName: '牛奶',
  unit: 'Pcs',
  amount: 1000,
  price: 19417.48,
  receiptDate: '2014/08/31',
  serviceClosed: false
},{
  date: '2014/07/13',
  code: 'XSBJD0001',
  dataState: '已审核',
  customer: '伊利集团有限公司',
  salesDepartment: '销售部',
  closed: false,
  materialCode: '003',
  materialName: '三聚氰胺',
  unit: 'Pcs',
  amount: 1000,
  price: 19417.48,
  receiptDate: '2014/08/31',
  serviceClosed: false
}])