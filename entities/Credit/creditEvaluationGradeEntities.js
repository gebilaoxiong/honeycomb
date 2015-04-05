/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-14 17:40:23
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: '1.1.1',
  customer: '深圳市深华食品有限公司',
  evaluationDate: '2014/04/18',
  evaluationOrg: '蓝海食品集团有限公司',
  evaluationModel: '预设信用评估方案',
  grade: undefined,
  creditRating: '信用等级方案1',
  ratingLevel: ''
}]);