/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchaseOrderAlter/List/meta/filed',
  'project/Purchase/PurchaseOrderAlter/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchaseOrderAlterGridPanel',
    
    recordType: 'PurchaseOrderAlterRecord',

    properties: filed,

    store: gridStore
  }
});
