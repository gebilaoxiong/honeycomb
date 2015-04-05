/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/StorehouseValueSet/List/meta/filed',
  'project/Foundation/StorehouseValueSet/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'StorehouseValueSetGridPanel',
    
    recordType: 'StorehouseValueSetRecord',

    properties: filed,

    store: gridStore
  }
});
