/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 01:10:58
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  id: '1',
  org: '蓝海柴油机本部',
  type: '销售员',
  name: '光羽',
  departmentName: '销售部',
  description: '呵呵',
  postName: '主任',
  disabled: false
}, {
  id: '2',
  org: '蓝海柴油机本部',
  type: '销售员',
  name: '杨曼',
  departmentName: '销售部',
  description: '呵呵',
  postName: '主任',
  disabled: false
}]);