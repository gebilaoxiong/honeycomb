/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/BusinessGroup/List/meta/filed',
  'project/Foundation/BusinessGroup/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'BusinessGroupGridPanel',

    recordType: 'BusinessGroupRecord',

    properties: filed,

    store: store
  }
});
