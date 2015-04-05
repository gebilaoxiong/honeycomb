/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/Post/List/meta/filed',
  'project/Foundation/Post/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PostGridPanel',
    
    recordType: 'PostRecord',

    properties: filed,

    store: gridStore
  }
});
