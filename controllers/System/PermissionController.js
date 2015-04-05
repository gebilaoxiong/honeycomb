/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:55:20
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/System/permissionEntities')
});
