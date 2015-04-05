/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:03:46
 * @description 仓库值列表控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Foundation/storehouseValueSetEntities')
});

