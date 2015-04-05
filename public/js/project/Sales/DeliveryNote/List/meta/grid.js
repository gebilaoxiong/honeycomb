/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/DeliveryNote/List/meta/filed',
  'project/Sales/DeliveryNote/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'DeliveryNoteGridPanel',
    
    recordType: 'DeliveryNoteRecord',

    properties: filed,

    store: gridStore
  }
});
