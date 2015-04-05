/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:11:30
 * @description 货币控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Foundation/currencyEntities')
});
