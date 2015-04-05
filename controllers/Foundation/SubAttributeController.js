/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:09:11
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/subAttributeEntities')
});

