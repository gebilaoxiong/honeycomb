/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchasePrice/List/meta/filed',
  'project/Purchase/PurchasePrice/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchasePriceGridPanel',
    
    recordType: 'PurchasePriceRecord',

    properties: filed,

    store: gridStore
  }
});
