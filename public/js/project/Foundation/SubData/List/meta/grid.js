/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/SubData/List/meta/filed',
  'project/Foundation/SubData/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SubDataGridPanel',
    
    recordType: 'SubDataRecord',

    properties: filed,

    store: gridStore
  }
});
