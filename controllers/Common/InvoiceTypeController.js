/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 00:08:21
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Common/invoiceTypeEntities')
});
