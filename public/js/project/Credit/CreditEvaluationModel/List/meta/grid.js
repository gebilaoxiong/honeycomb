/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:01
 * @description 
 */
define([
  'project/Credit/CreditEvaluationModel/List/meta/filed',
  'project/Credit/CreditEvaluationModel/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CreditEvaluationModelGridPanel',
    
    recordType: 'CreditEvaluationModelRecord',

    properties: filed,

    store: gridStore
  }
});
