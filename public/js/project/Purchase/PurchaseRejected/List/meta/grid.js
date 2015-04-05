/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchaseRejected/List/meta/filed',
  'project/Purchase/PurchaseRejected/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchaseRejectedGridPanel',
    
    recordType: 'PurchaseRejectedRecord',

    properties: filed,

    store: gridStore
  }
});
