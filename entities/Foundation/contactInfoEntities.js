/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 00:33:31
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: '0001',
  name: '张三',
  category: '员工',
  sex: '男',
  tell: '1',
  mobile: '2',
  fax: '2',
  company: '',
  dataState: '已审核',
  disabled: false
}]);