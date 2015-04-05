/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/TaxSystem/List/meta/filed',
  'project/Foundation/TaxSystem/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'TaxSystemGridPanel',

    recordType: 'TaxSystemRecord',

    properties: filed,

    store: store
  }
});
