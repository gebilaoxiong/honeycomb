/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 00:39:37
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Sales/salesPriceEntities')
});
