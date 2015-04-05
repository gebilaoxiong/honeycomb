/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 13:25:57
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  createOrg: '蓝海机械总公司',
  useOrg: '蓝海机械总公司',
  code: 'CTC000006',
  name: 'CTC000006',
  templateName: '默认模板',
  dataState: '已审核',
  disabled: false
}, {
  createOrg: '蓝海机械总公司',
  useOrg: '蓝海机械总公司',
  code: 'CTC000001',
  name: 'CTC000001',
  templateName: 'fdsghsdf',
  dataState: '已审核',
  disabled: false
}])