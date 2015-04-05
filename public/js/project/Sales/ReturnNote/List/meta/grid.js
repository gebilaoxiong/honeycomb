/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/ReturnNote/List/meta/filed',
  'project/Sales/ReturnNote/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'ReturnNoteGridPanel',
    
    recordType: 'ReturnNoteRecord',

    properties: filed,

    store: gridStore
  }
});
