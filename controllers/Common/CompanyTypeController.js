/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:34:20
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Common/companyTypeEntities')
});
