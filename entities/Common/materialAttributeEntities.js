/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-15 01:20:00
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '外购'
}, {
  name: '自制'
}, {
  name: '委外'
}, {
  name: '虚拟'
}, {
  name: '资产'
}, {
  name: '特征'
}, {
  name: '服务'
}, {
  name: '费用'
}, {
  name: '临时'
}, {
  name: '配置件'
}]);
