/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:27:08
 * @description 
 */
define([
  'project/System/User/List/meta/filed',
  'project/System/User/List/data/gridStore'
], function(filed, gridStore) {
  return {
    type: 'UserGridPanel',

    recordType: 'UserRecord',

    properties: filed,

    store: gridStore
  }
});
