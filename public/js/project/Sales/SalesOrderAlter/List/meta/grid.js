/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesOrderAlter/List/meta/filed',
  'project/Sales/SalesOrderAlter/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesOrderAlterGridPanel',
    
    recordType: 'SalesOrderAlterRecord',

    properties: filed,

    store: gridStore
  }
});
