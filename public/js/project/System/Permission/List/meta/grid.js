/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:36:52
 * @description 
 */
define([
  'project/System/Permission/List/meta/filed',
  'project/System/Permission/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PermissionGridPanel',
    
    recordType: 'PermissionRecord',

    properties: filed,

    store: gridStore
  }
});
