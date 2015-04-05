/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 15:00:43
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  businessObject: 'ABC分组',
  name: 'ABC分组标准编码规则',
  isDefault: true,
  description: 'ABC分组标准编码规则',
  dataState: '已审核'
}, {
  businessObject: 'MRP运算单据',
  name: '运算方案编码规则',
  isDefault: true,
  description: 'MRP',
  dataState: '已审核'
}, {
  businessObject: '班次',
  name: '班次标准编码规则',
  isDefault: true,
  description: '班次标准编码规则',
  dataState: '已审核'
}, {
  businessObject: '班制',
  name: '班制标准编码规则',
  isDefault: true,
  description: '班制标准编码规则',
  dataState: '已审核'
}, {
  businessObject: '班组',
  name: '班组标准编码规则',
  isDefault: true,
  description: '班组标准编码规则',
  dataState: '已审核'
}, {
  businessObject: '部门',
  name: '部门标准编码规则',
  isDefault: true,
  description: '部门标准编码规则',
  dataState: '已审核'
}]);