/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 13:02:01
 * @description 
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Credit/creditCheckingRuleEntities')
});

