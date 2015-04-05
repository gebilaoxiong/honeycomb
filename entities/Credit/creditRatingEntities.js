/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 16:25:59
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0001_SYS',
  name: 'AAA',
  description: '信用极好，企业信用程度高，清债能力强。',
  scoreFloor: 90,
  scoreCeiling: 100,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0002_SYS',
  name: 'AA',
  description: '信用优良，企业信用程度较高，有较强的清债能力与支付能力。',
  scoreFloor: 80,
  scoreCeiling: 89.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0003_SYS',
  name: 'AA',
  description: '信用较好，企业信用程度良好，清债能力与支付能力尚可。',
  scoreFloor: 70,
  scoreCeiling: 79.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0004_SYS',
  name: 'BBB',
  description: '信用一般，企业信用程度一般，有一定风险。',
  scoreFloor: 60,
  scoreCeiling: 69.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0005_SYS',
  name: 'BB',
  description: '信用欠佳，企业信用程度较差，清债能力与支付能力欠佳，有一定风险。',
  scoreFloor: 50,
  scoreCeiling: 59.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0006_SYS',
  name: 'B',
  description: '信用较差，企业信用程度差，清债能力与支付能力较弱，尚有能力偿还债务。',
  scoreFloor: 40,
  scoreCeiling: 49.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0007_SYS',
  name: 'CCC',
  description: '信用很差，企业信用程度很差，存在很大风险，几乎没有偿债能力。',
  scoreFloor: 30,
  scoreCeiling: 39.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0008_SYS',
  name: 'CC',
  description: '信用极差，企业信用程度极差，企业处于亏损状态，没有偿债能力。',
  scoreFloor: 20,
  scoreCeiling: 29.99,
  disabled: false
}, {
  ratingScheme: '信用等级方案1',
  code: 'XYDJ0009_SYS',
  name: 'C',
  description: '没有信用，企业无信用，企业基本无力偿还债务，接近破产。',
  scoreFloor: 0,
  scoreCeiling: 19.99,
  disabled: false
}]);