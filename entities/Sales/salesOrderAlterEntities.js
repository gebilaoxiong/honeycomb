/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 22:41:19
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  date: '2014/07/12',
  originalCode: 'XSBJD0001',
  code:'XSDDBGD0001',
  customer: '伊利集团有限公司',
  receiver: '西北销售中心',
  dataState: '已审核',
  reason:'对方仓库太小装不下',
  isEffect:false,
  isInvalid:false,
  materialCode: '002',
  materialName: '牛奶',
  modifyType:'修改',
  originalAmount:1000,
  amount:500
}])
