/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 01:40:12
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/unitEntities')
});
