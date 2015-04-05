/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:27:08
 * @description 
 */
define([
  'project/Credit/CreditEvaluateIndicator/List/meta/filed',
  'project/Credit/CreditEvaluateIndicator/List/data/gridStore'
], function(filed, gridStore) {
  return {
    type: 'CreditEvaluateIndicatorGridPanel',

    recordType: 'CreditEvaluateIndicatorRecord',

    properties: filed,

    store: gridStore
  }
});
