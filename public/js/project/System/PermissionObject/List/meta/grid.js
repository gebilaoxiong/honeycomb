/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:28:12
 * @description 
 */
define([
  'project/System/PermissionObject/List/meta/filed',
  'project/System/PermissionObject/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PermissionObjectGridPanel',
    
    recordType: 'PermissionObjectRecord',

    properties: filed,

    store: gridStore
  }
});
