/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-16 15:23:33
 * @description 
 */

var Entities = require('express-mvc').Entities,
  entities;



entities = module.exports = new Entities([{
  code: '100',
  name: '蓝海食品集团有限公司',
  orgType: '总公司',
  isAccountOrg:true,
  accountOrgType:'法人组织',
  corporation:'蓝海食品集团有限公司',
  dataState: '已审核'
},{
  code: '1001',
  name: '蓝海食品制造有限公司',
  orgType: '总公司',
  isAccountOrg:true,
  accountOrgType:'法人组织',
  corporation:'蓝海食品制造有限公司',
  dataState: '已审核'
},{
  code: '100101',
  name: '蓝海南方区公司',
  orgType: '分公司',
  isAccountOrg:true,
  accountOrgType:'法人组织',
  corporation:'蓝海食品制造有限公司',
  dataState: '已审核'
},{
  code: '10010101',
  name: '蓝海广州办事处',
  orgType: '办事处',
  isAccountOrg:true,
  accountOrgType:'',
  corporation:'蓝海食品制造有限公司',
  dataState: '已审核'
}]);