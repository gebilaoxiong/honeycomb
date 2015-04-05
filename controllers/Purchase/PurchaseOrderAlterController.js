/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 17:32:03
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Purchase/purchaseOrderAlterEntities')
});
