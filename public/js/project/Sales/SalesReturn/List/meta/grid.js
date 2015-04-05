/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesReturn/List/meta/filed',
  'project/Sales/SalesReturn/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesReturnGridPanel',
    
    recordType: 'SalesReturnRecord',

    properties: filed,

    store: gridStore
  }
});
