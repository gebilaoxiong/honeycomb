/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchasePriceAdjust/List/meta/filed',
  'project/Purchase/PurchasePriceAdjust/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchasePriceAdjustGridPanel',
    
    recordType: 'PurchasePriceAdjustRecord',

    properties: filed,

    store: gridStore
  }
});
