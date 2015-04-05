/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-01 23:37:20
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'SKTJ001',
  name: '预收30%余款到收款',
  maturityStandard: '按比例',
  maturityDate: '应收单业务日期',
  description:'',
  disabled: false,
  dataState: '已审核'
},{
  code: 'SKTJ01_SYS',
  name: '货到收款',
  maturityStandard: '按比例',
  maturityDate: '应收单业务日期',
  description:'',
  disabled: false,
  dataState: '已审核'
},{
  code: 'SKTJ02_SYS',
  name: '30天后收款',
  maturityStandard: '按比例',
  maturityDate: '应收单业务日期',
  description:'',
  disabled: false,
  dataState: '已审核'
},{
  code: 'SKTJ02_SYS',
  name: '月结30天',
  maturityStandard: '按比例',
  maturityDate: '应收单业务日期',
  description:'',
  disabled: false,
  dataState: '已审核'
},{
  code: 'SKTJ02_SYS',
  name: '多到期日（按金额）',
  maturityStandard: '按金额',
  maturityDate: '应收单业务日期 货到收款2万，30天后收款5万，余款60天后收清',
  description:'',
  disabled: false,
  dataState: '已审核'
}]);
