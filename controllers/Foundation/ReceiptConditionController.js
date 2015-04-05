/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-01 23:36:53
 * @description 
 */

var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/receiptConditionEntities')
});