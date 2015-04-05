/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/PaymentsType/List/meta/filed',
  'project/Foundation/PaymentsType/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PaymentsTypeGridPanel',
    
    recordType: 'PaymentsTypeRecord',

    properties: filed,

    store: gridStore
  }
});

