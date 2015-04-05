/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/TaxRule/List/meta/filed',
  'project/Foundation/TaxRule/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'TaxRuleGridPanel',

    recordType: 'TaxRuleRecord',

    properties: filed,

    store: store
  }
});
