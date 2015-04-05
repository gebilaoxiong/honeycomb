/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:01:22
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
    code: 'BM00001',
    name: '事业部',
    memoni: 'syb',
    dataState:'已审核',
    disabled: true,
    fullName: '蓝海机械厂事业部',
    createOrg: '蓝海机械总公司',
    useOrg: '蓝海机械总公司'
  }, {
    code: 'BM00002',
    name: '工程部',
    memoni: 'gcb',
    dataState:'创建',
    disabled: false,
    fullName: '蓝海机械厂工程部',
    createOrg: '蓝海机械总公司',
    useOrg: '蓝海机械总公司'
  }, {
    code: 'BM00003',
    name: '安质部',
    memoni: 'azb',
    dataState:'已审核',
    disabled: false,
    fullName: '蓝海机械厂安质部',
    createOrg: '蓝海机械总公司',
    useOrg: '蓝海机械总公司'
  }]);
