/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/WorkSystem/List/meta/filed',
  'project/Foundation/WorkSystem/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'WorkSystemGridPanel',
    
    recordType: 'WorkSystemRecord',

    properties: filed,

    store: gridStore
  }
});
