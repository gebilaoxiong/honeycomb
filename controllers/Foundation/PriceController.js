/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 00:57:05
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/priceEntities')
});

