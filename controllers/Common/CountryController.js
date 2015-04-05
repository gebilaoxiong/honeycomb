/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 22:04:31
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Common/countryEntities')
});
