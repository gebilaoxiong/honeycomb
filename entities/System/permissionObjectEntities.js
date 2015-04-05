/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:31:22
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  subSystem: '基础资料',
  code: 'BD_AUXPROPERTY',
  name: '辅助属性',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_AUXPTYVALUE',
  name: '辅助属性值',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_AUXPROPERTYCOMBINE',
  name: '辅助属性值组合',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_BANK',
  name: '银行',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_BC_SYS',
  name: '班次',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_BM_SYS',
  name: '部门',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_CHLB_SYS',
  name: '存货类别',
  preset: true
}, {
  subSystem: '基础资料',
  code: 'BD_DJLX_SYS',
  name: '单据类型',
  preset: true
}]);