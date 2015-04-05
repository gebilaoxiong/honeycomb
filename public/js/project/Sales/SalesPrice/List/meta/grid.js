/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesPrice/List/meta/filed',
  'project/Sales/SalesPrice/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesPriceGridPanel',
    
    recordType: 'SalesPriceRecord',

    properties: filed,

    store: gridStore
  }
});
