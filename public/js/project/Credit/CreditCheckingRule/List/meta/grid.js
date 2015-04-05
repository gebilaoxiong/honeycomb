/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:01
 * @description 
 */
define([
  'project/Credit/CreditCheckingRule/List/meta/filed',
  'project/Credit/CreditCheckingRule/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CreditCheckingRuleGridPanel',
    
    recordType: 'CreditCheckingRuleRecord',

    properties: filed,

    store: gridStore
  }
});
