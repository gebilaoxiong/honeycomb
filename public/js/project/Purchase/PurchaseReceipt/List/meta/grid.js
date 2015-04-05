/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchaseReceipt/List/meta/filed',
  'project/Purchase/PurchaseReceipt/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchaseReceiptGridPanel',
    
    recordType: 'PurchaseReceiptRecord',

    properties: filed,

    store: gridStore
  }
});
