/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/Organization/List/meta/filed',
  'project/Foundation/Organization/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'OrganizationGridPanel',
    
    recordType: 'OrganizationRecord',

    properties: filed,

    store: gridStore
  }
});
