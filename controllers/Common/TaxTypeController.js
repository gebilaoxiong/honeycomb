/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 02:54:41
 * @description 
 */

var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Common/taxTypeEntities')
});