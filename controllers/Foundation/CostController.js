/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:40:35
 * @description 费用控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Foundation/costEntities')
});
