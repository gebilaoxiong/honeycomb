/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 00:20:16
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;



entities = module.exports = new Entities([{
  postName: '修理工',
  code: 'GWHB00001',
  org: '蓝海柴油机本部',
  departmentName: '总务部',
  departmentFullName: '蓝海柴油机本部总务部',
  dataState: '已审核',
  disabled: false
}])