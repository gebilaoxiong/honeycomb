/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 13:02:59
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'XYJCGZ0001',
  name: '预设标准规则',
  isDefault: false,
  dataState: '已审核',
  auditor:'Administrator',
  auditDate:'1993/08/08'
}]);
