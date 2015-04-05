/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:34:04
 * @description 
 */
define([
  'project/System/Broadcast/List/meta/filed',
  'project/System/Broadcast/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'BroadcastGridPanel',
    
    recordType: 'BroadcastRecord',

    properties: filed,

    store: gridStore
  }
});
