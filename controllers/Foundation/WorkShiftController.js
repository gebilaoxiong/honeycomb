/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 14:03:17
 * @description 班次控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Foundation/workShiftEntities')
});
