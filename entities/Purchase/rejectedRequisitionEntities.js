/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 22:02:01
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  type:'标准退料申请',
  code: 'CGRK00001',
  applyDate: '2014/02/16',
  applyOrg: '蓝海电商商务事业部',
  rejectType: '库存退料',
  vendor: '威客休闲食品公司',
  dataState: '创建',
  materialCode: 'M00001',
  materialName: '啤酒',
  specification: '',
  unit: 'PSC',
  rejectAmount: 10
}]);