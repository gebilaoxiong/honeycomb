/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/SubAttrValue/List/meta/filed',
  'project/Foundation/SubAttrValue/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SubAttrValueGridPanel',
    
    recordType: 'SubAttrValueRecord',

    properties: filed,

    store: gridStore
  }
});