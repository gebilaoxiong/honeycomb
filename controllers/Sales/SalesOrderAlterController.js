/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 22:41:27
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Sales/salesOrderAlterEntities')
});
