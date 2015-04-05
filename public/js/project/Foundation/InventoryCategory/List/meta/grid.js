/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/InventoryCategory/List/meta/filed',
  'project/Foundation/InventoryCategory/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'InventoryCategoryGridPanel',

    recordType: 'InventoryCategoryRecord',

    properties: filed,

    store: store
  }
});
