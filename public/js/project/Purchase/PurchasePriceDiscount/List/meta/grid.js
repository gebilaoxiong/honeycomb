/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/PurchasePriceDiscount/List/meta/filed',
  'project/Purchase/PurchasePriceDiscount/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PurchasePriceDiscountGridPanel',
    
    recordType: 'PurchasePriceDiscountRecord',

    properties: filed,

    store: gridStore
  }
});
