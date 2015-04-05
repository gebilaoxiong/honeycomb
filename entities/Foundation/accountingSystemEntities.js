/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 16:45:57
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: '001',
  name: '法人核算体系',
  isCorporate: true,
  dataState: '已审核',
  disabled: false
}, {
  code: '002',
  name: '责任中心核算体系',
  isCorporate: true,
  dataState: '已审核',
  disabled: false
}]);