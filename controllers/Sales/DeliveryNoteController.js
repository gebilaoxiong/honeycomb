/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 23:08:08
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Sales/deliveryNoteEntities')
});

