/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/System/Role/List/meta/filed',
  'project/System/Role/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'RoleGridPanel',
    
    recordType: 'RoleRecord',

    properties: filed,

    store: gridStore
  }
});
