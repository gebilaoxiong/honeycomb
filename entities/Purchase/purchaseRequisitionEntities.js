/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-12 15:45:20
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  type: '标准采购申请',
  code: 'BJCGSQ01',
  dataState: '暂存',
  closed: false,
  applyOrg: '蓝海电子商务事业部',
  applyDate: '2014/07/12',
  materialCode: 'M00001',
  materialName: '50KW柴油机',
  applyAmount: 100,
  ratifyAmount: undefined,
  receiptDate: '2014/07/13'
}])