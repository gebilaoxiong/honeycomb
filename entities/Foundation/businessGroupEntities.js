/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 01:27:49
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  type: '销售组',
  description: '产品销售',
  org: '蓝海柴油机本部',
  code: 'S0001',
  name: '西铁城销售组',
  disabled: false
}, {
  type: '库存组',
  description: '管理西铁城库存',
  org: '蓝海柴油机本部',
  code: 'S0002',
  name: '西铁城库存管理组',
  disabled: false
}, {
  type: '采购组',
  description: '采购西铁城所需物质',
  org: '蓝海柴油机本部',
  code: 'S0002',
  name: '西铁城库采购组',
  disabled: false
}]);