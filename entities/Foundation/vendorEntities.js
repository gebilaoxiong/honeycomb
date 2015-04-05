/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 22:45:59
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
    useOrg:'蓝海柴油机公司',
    code: 'V00001',
    name: '雅俊事业',
    shortName: '雅俊',
    auditor:'demo',
    auditDate:'2010/01/01',
    dataState:'已审核',
    disabled:false
  }, {
    useOrg:'蓝海柴油机公司',
    code: 'V00002',
    name: '明瑞五金',
    shortName: '明瑞',
    auditor:'demo',
    auditDate:'2010/01/02',
    dataState:'已审核',
    disabled:false
  }, {
    useOrg:'蓝海柴油机公司',
    code: 'V00003',
    name: '长安制造',
    shortName: '长安',
    auditor:'demo',
    auditDate:'2010/01/03',
    dataState:'已审核',
    disabled:false
  }]);
