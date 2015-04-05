/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 19:03:53
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Sales/salesQuotationEntities')
});
