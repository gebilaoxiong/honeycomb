/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/ContactInfo/List/meta/filed',
  'project/Foundation/ContactInfo/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'ContactInfoGridPanel',

    recordType: 'ContactInfoRecord',

    properties: filed,

    store: store
  }
});
