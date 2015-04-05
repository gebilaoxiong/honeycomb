/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 15:09:45
 * @description 
 */

var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  creditOrg:'蓝海食品集团有限公司',
  signer:'Administrator',
  currency:'人民币',
  allowSpecialLine:50,
  allowSpecialDays:1,
  dataState: '已审核',
  auditor:'Administrator',
  auditDate:'1993/08/08'
}]);