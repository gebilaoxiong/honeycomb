/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/SubAttrValComb/List/meta/filed',
  'project/Foundation/SubAttrValComb/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SubAttrValCombGridPanel',
    
    recordType: 'SubAttrValCombRecord',

    properties: filed,

    store: gridStore
  }
});
