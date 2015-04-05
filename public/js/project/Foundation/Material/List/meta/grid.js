/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-03 23:29:44
 * @description
 */
define([
  'project/Foundation/Material/List/meta/filed',
  'project/Foundation/Material/List/data/gridStore'
], function(filed, gridStore) {
  return {
    type: 'MaterialGridPanel',

    recordType: 'MaterialRecord',

    properties: filed,

    store: gridStore
  }
});