/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:50:52
 * @description 
 */

var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  permissionObject:'辅助属性',
  code:'BD_AUXPROPERTY_DATARULE',
  name:'限制查询',
  disabled:false,
  preset:true
}])