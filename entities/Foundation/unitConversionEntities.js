/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 12:48:56
 * @description 
 */

var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
    materialCode: '1.03.0003',
    materialName: '钢板 45#',
    unit: '千克',
    baseUnit: '平方米',
    numerator: 1.000,
    denominator: 75.000,
    conversionType:'浮动',
    creater: 'Administrator',
    createDate: '2001/1/1',
    modifier: 'Administrator',
    modifiedDate: '2001/1/2'
  }, {
    materialCode: '1.03.0004',
    materialName: '钢板 45#',
    unit: '千克',
    baseUnit: '平方米',
    numerator: 1.000,
    denominator: 100.00,
    conversionType:'浮动',
    creater: 'Administrator',
    createDate: '2001/1/1',
    modifier: 'Administrator',
    modifiedDate: '2001/1/2'
  }, {
    materialCode: '1.03.0001',
    materialName: '钢棒 45#',
    unit: '千克',
    baseUnit: '米',
    numerator: 1.00,
    denominator: 15.00,
    conversionType:'浮动',
    creater: 'Administrator',
    createDate: '2001/1/1',
    modifier: 'Administrator',
    modifiedDate: '2001/1/2'
  }, {
    materialCode: '1.03.0002',
    materialName: '钢棒 45#',
    unit: '千克',
    baseUnit: '米',
    numerator: 1.00,
    denominator: 20.00,
    conversionType:'浮动',
    creater: 'Administrator',
    createDate: '2001/1/1',
    modifier: 'Administrator',
    modifiedDate: '2001/1/2'
  }, {
    materialCode: '1.01.110-0018.000',
    materialName: '轴承',
    unit: '箱',
    baseUnit: 'Pcs',
    numerator: 6,
    denominator: 1,
    conversionType:'固定',
    creater: 'Administrator',
    createDate: '2001/1/1',
    modifier: 'Administrator',
    modifiedDate: '2001/1/2'
  }, {
    materialCode: '1.01.110-0018.001',
    materialName: '轴承',
    unit: '箱',
    baseUnit: 'Pcs',
    numerator: 6,
    denominator: 1,
    conversionType:'固定',
    creater: 'Administrator',
    createDate: '2001/1/1',
    modifier: 'Administrator',
    modifiedDate: '2001/1/2'
  }])