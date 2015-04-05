/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 15:55:30
 * @description 原材料控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller,record;

record={
  id: '1',

  name: '办公用品',

  code: 'CUST0005',

  createOrg: {
    id: '2',
    name: '蓝海机械总公司'
  },

  useOrg: {
    id: '2',
    name: '蓝海机械总公司'
  }
}


Controller = module.exports = BaseController.define({
  entities:require('../../entities/Foundation/materialEntities'),

  record:record
});