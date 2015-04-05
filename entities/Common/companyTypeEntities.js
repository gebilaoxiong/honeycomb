/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:32:10
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  name: '国有企业'
}, {
  name: '集体企业'
}, {
  name: '有限责任公司'
}, {
  name: '股份有限公司'
}, {
  name: '私营企业'
}, {
  name: '中外合资企业'
}, {
  name: '外商投资企业'
}]);
