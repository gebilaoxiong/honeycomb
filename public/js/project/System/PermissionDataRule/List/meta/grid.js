/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:45:30
 * @description 
 */
define([
  'project/System/PermissionDataRule/List/meta/filed',
  'project/System/PermissionDataRule/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PermissionDataRuleGridPanel',
    
    recordType: 'PermissionDataRuleRecord',

    properties: filed,

    store: gridStore
  }
});
