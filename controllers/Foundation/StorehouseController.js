/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 21:54:28
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Foundation/storehouseEntities')
});
