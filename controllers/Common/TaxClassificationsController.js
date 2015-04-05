/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-15 01:13:01
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Common/taxClassificationsEntities')
});
