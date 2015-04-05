/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 14:02:32
 * @description
 */

var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  createOrg: '总装事业部',
  useOrg: '总装事业部',
  code: 'BC000001',
  name: 'asdf',
  workTime: 4.00,
  effectDate: '2014/1/6',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}, {
  createOrg: '总装事业部',
  useOrg: '总装事业部',
  code: 'BC000002',
  name: 's01',
  workTime: 8.00,
  effectDate: '2014/1/6',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}, {
  createOrg: '蓝海机械总公司',
  useOrg: '蓝海机械总公司',
  code: 'BC01_SYS',
  name: '上午班',
  workTime: 4.00,
  effectDate: '2013/1/1',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}, {
  createOrg: '蓝海机械总公司',
  useOrg: '蓝海机械总公司',
  code: 'BC02_SYS',
  name: '下午班',
  workTime: 4.00,
  effectDate: '2013/1/1',
  invalidDate: '9999/12/31',
  dataState: '已审核',
  disabled: false
}])