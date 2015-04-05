/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:00:50
 * @description
 */
var BaseController = require('../../util/BaseController'),
  Controller, record, category;

record = {
  id: '1',

  name: '事业部',

  code: 'BM00001',

  createOrg: {
    id: '2',
    name: '蓝海机械总公司'
  },

  useOrg: {
    id: '2',
    name: '蓝海机械总公司'
  },

  memoni: 'syb',

  parentDept: {
    id: '1',
    name: '蓝海集团'
  },

  fullName: '蓝海机械总公司事业部',

  effectDate: '2014/07/01',

  invalidDate: '2015/07/01',

  type: {
    id: 1,
    text: '采购部门'
  }
};


category = [{
  id: 1,
  text: '采购部门'
}, {
  id: 2,
  text: '销售部门'
}, {
  id: 3,
  text: '研发部门'
}, {
  id: 4,
  text: '管理部门'
}, {
  id: 5,
  text: '基本生产部门'
}, {
  id: 6,
  text: '铺助生产部门'
}];


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/departmentEntities'),

  record: record
});

Controller.defineAction('category', function() {
  var me = this;

  me.jsonResult(category);
}, 'Get')