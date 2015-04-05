/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesOrder/List/meta/filed',
  'project/Sales/SalesOrder/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesOrderGridPanel',
    
    recordType: 'SalesOrderRecord',

    properties: filed,

    store: gridStore
  }
});
