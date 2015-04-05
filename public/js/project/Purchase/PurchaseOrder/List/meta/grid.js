/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchaseOrder/List/meta/filed',
  'project/Purchase/PurchaseOrder/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchaseOrderGridPanel',
    
    recordType: 'PurchaseOrderRecord',

    properties: filed,

    store: gridStore
  }
});
