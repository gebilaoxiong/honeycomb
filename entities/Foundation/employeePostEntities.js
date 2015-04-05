/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 00:48:41
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  employeeName: '焦裕禄',
  employeeCode: '0001',
  departmentName: '机加车间',
  postName: '主任',
  disabled: false,
  dataState: '已审核'
}, {
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  employeeName: '黄继光',
  employeeCode: '0002',
  postName: '行政',
  departmentName: '总务部',
  disabled: false,
  dataState: '已审核'
}, {
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  employeeName: '邱少云',
  employeeCode: '0003',
  postName: '统计员',
  departmentName: '总务部',
  disabled: false,
  dataState: '已审核'
}, {
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  employeeName: '光羽',
  employeeCode: '0004',
  postName: '销售员',
  departmentName: '销售部',
  disabled: false,
  dataState: '已审核'
}, {
  id: '5',
  createOrg: '蓝海柴油机本部',
  useOrg: '蓝海柴油机本部',
  employeeName: '杨曼',
  employeeCode: '0005',
  postName: '销售员',
  departmentName: '销售部',
  disabled: false,
  dataState: '已审核'
}]);