/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/CodeRule/List/meta/filed',
  'project/Foundation/CodeRule/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CodeRuleGridPanel',
    
    recordType: 'CodeRuleRecord',

    properties: filed,

    store: gridStore
  }
});
