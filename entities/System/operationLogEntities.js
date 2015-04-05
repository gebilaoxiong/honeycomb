/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:11:29
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  user: '全能用户',
  operationDate: '2014/7/10 22:18:00',
  org: '蓝海电子商务事业部',
  subSystem: '系统管理',
  businessObject: '业务领域批量授权',
  scene: '进入业务对象',
  operationName: '主控台操作',
  description: '主控台操作',
  ipAddress: '192.168.66.25',
  macAddress: ''
}, {
  user: '全能用户',
  operationDate: '2014/7/9 22:18:00',
  org: '蓝海电子商务事业部',
  subSystem: '基础资料',
  businessObject: '员工',
  scene: '业务操作',
  operationName: '审核',
  description: '员工编号为‘1001’的员工，审核成功！',
  ipAddress: '192.168.66.25',
  macAddress: ''
}, {
  user: '全能用户',
  operationDate: '2014/7/9 22:10:00',
  org: '蓝海电子商务事业部',
  subSystem: '基础资料',
  businessObject: '员工',
  scene: '业务操作',
  operationName: '提交',
  description: '员工编号为‘1001’的员工，提交成功！',
  ipAddress: '192.168.66.25',
  macAddress: ''
}, {
  user: '全能用户',
  operationDate: '2014/7/9 22:05:00',
  org: '蓝海电子商务事业部',
  subSystem: '基础资料',
  businessObject: '员工',
  scene: '业务操作',
  operationName: '审核',
  description: '员工编号为‘1001’的员工，请先提交后，再进行审核！',
  ipAddress: '192.168.66.25',
  macAddress: ''
}, {
  user: '全能用户',
  operationDate: '2014/7/9 22:05:00',
  org: '蓝海电子商务事业部',
  subSystem: '基础资料',
  businessObject: '员工',
  scene: '业务操作',
  operationName: '保存',
  description: '员工编号为‘1001’的员工，保存成功！',
  ipAddress: '192.168.66.25',
  macAddress: ''
}]);