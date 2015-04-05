/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:56:33
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;



entities = module.exports = new Entities([{
  code: 'GW000001',
  name: '公关',
  memoni: 'gg',
  departmentName: '总务部',
  disabled: false,
  dataState: '已审核',
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  departmentFullName: '蓝海柴油机本部总务部'
}, {
  code: 'GW000002',
  name: '驾驶员',
  memoni: 'jsy',
  departmentName: '总务部',
  disabled: false,
  dataState: '已审核',
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  departmentFullName: '蓝海柴油机本部总务部'
}, {
  code: 'GW000003',
  name: '修理工',
  memoni: 'xlg',
  departmentName: '总务部',
  disabled: false,
  dataState: '已审核',
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  departmentFullName: '蓝海柴油机本部总务部'
}, {
  code: 'GW000004',
  name: '保养师',
  memoni: 'bys',
  departmentName: '总务部',
  disabled: false,
  dataState: '已审核',
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  departmentFullName: '蓝海柴油机本部总务部'
}, {
  code: 'GW000005',
  name: '销售员',
  memoni: 'xsy',
  departmentName: '销售部',
  disabled: false,
  dataState: '已审核',
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  departmentFullName: '蓝海柴油机本部总务部'
}]);