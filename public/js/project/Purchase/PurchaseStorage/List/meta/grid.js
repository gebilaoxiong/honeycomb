/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchaseStorage/List/meta/filed',
  'project/Purchase/PurchaseStorage/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchaseStorageGridPanel',
    
    recordType: 'PurchaseStorageRecord',

    properties: filed,

    store: gridStore
  }
});
