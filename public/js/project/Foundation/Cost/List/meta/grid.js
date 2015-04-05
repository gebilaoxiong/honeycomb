/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/Cost/List/meta/filed',
  'project/Foundation/Cost/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CostGridPanel',
    
    recordType: 'CostRecord',

    properties: filed,

    store: gridStore
  }
});
