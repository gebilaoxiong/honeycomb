/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesPriceAdjust/List/meta/filed',
  'project/Sales/SalesPriceAdjust/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesPriceAdjustGridPanel',
    
    recordType: 'SalesPriceAdjustRecord',

    properties: filed,

    store: gridStore
  }
});
