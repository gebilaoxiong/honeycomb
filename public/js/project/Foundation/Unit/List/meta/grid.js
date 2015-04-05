/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/Unit/List/meta/filed',
  'project/Foundation/Unit/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'UnitGridPanel',
    
    recordType: 'UnitRecord',

    properties: filed,

    store: gridStore
  }
});
