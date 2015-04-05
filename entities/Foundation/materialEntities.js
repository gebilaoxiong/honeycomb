/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 20:48:43
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  useOrg: '蓝海柴油机械本部',
  code: 'M00001',
  name: '50KW柴油机',
  specification: '50KW',
  baseUnit: 'Pcs',
  dataState: '已审核',
  disabled: false,
  attribute: '外购'
}, {
  useOrg: '蓝海柴油机械本部',
  code: 'M00002',
  name: '接板-A系列',
  baseUnit: 'Pcs',
  dataState: '已审核',
  disabled: false,
  attribute: '外购'
}, {
  useOrg: '蓝海柴油机械本部',
  code: 'M00003',
  name: '螺杆',
  baseUnit: 'Pcs',
  dataState: '已审核',
  disabled: false,
  attribute: '外购'
}]);