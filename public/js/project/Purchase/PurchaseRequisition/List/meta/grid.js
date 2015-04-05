/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchaseRequisition/List/meta/filed',
  'project/Purchase/PurchaseRequisition/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchaseRequisitionGridPanel',
    
    recordType: 'PurchaseRequisitionRecord',

    properties: filed,

    store: gridStore
  }
});
