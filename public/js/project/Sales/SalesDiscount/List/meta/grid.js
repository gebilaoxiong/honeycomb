/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesDiscount/List/meta/filed',
  'project/Sales/SalesDiscount/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesDiscountGridPanel',
    
    recordType: 'SalesDiscountRecord',

    properties: filed,

    store: gridStore
  }
});
