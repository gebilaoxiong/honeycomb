/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-01 22:35:11
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/paymentsTypeEntities')
});
