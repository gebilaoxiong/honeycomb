/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:45:42
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  departmentGroup: '',
  account: '173457117',
  name: 'B2B电商主管',
  description:'格莱利客户专用'
},{
  departmentGroup: '',
  account: 'xywindow@gmail.com',
  name: 'C2C电商主管',
  description:'格莱利客户专用'
},{
  departmentGroup: '',
  account: 'admin',
  name: '系统管理员',
  description:'系统内置'
}]);
