/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesQuotation/List/meta/filed',
  'project/Sales/SalesQuotation/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesQuotationGridPanel',
    
    recordType: 'SalesQuotationRecord',

    properties: filed,

    store: gridStore
  }
});
