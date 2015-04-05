/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/SubAttribute/List/meta/filed',
  'project/Foundation/SubAttribute/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SubAttributeGridPanel',
    
    recordType: 'SubAttributeRecord',

    properties: filed,

    store: gridStore
  }
});
