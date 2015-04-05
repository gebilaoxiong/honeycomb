/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/RecordType/List/meta/filed',
  'project/Foundation/RecordType/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'RecordTypeGridPanel',
    
    recordType: 'RecordTypeRecord',

    properties: filed,

    store: gridStore
  }
});
