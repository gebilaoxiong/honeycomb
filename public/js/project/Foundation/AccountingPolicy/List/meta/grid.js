/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/AccountingPolicy/List/meta/filed',
  'project/Foundation/AccountingPolicy/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'AccountingPolicyGridPanel',

    recordType: 'AccountingPolicyRecord',

    properties: filed,

    store: store
  }
});
