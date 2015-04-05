/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:01
 * @description 
 */
define([
  'project/Credit/CreditEvaluationGrade/List/meta/filed',
  'project/Credit/CreditEvaluationGrade/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CreditEvaluationGradeGridPanel',
    
    recordType: 'CreditEvaluationGradeRecord',

    properties: filed,

    store: gridStore
  }
});
