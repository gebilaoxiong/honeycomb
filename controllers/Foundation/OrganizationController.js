/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-16 15:23:02
 * @description
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/organizationEntities')
});