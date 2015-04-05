/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:13:45
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'B2B',
  name: 'B2B电商主管',
  type: '普通角色',
  preset: false,
  attribute: '公有',
  org: ''
}, {
  code: 'C2C',
  name: 'C2C电商主管',
  type: '普通角色',
  preset: false,
  attribute: '公有',
  org: ''
}, {
  code: 'all',
  name: 'all',
  type: '普通角色',
  preset: false,
  attribute: '公有',
  org: ''
}, {
  code: 'BD01_SYS',
  name: 'administrator',
  type: '系统管理员',
  preset: true,
  attribute: '公有',
  org: ''
}, {
  code: 'BD02_SYS',
  name: '人事管理员',
  type: '普通角色',
  preset: true,
  attribute: '公有',
  org: ''
}, {
  code: 'BOS01_SYS',
  name: '流程设计专员',
  type: '普通角色',
  preset: true,
  attribute: '公有',
  org: ''
}, {
  code: 'BOS02_SYS',
  name: '流程管理专员',
  type: '普通角色',
  preset: true,
  attribute: '公有',
  org: ''
}, {
  code: 'BOS03_SYS',
  name: '业务流程设计专员',
  type: '普通角色',
  preset: true,
  attribute: '公有',
  org: ''
}])