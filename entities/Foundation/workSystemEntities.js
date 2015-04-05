/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 13:48:37
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  createOrg: '蓝海机械总公司',
  useOrg: '蓝海机械总公司',
  code: 'SFT000001',
  name: '默认班制',
  workTime: 8.00,
  dataState: '已审核',
  disabled: false
}, {
  createOrg: '总装事业部',
  useOrg: '总装事业部',
  code: 'SFT000002',
  name: '白班',
  workTime: 4.00,
  dataState: '已审核',
  disabled: false
}])