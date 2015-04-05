/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/Storehouse/List/meta/filed',
  'project/Foundation/Storehouse/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'StorehouseGridPanel',
    
    recordType: 'StorehouseRecord',

    properties: filed,

    store: gridStore
  }
});
