/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/TaxCategory/List/meta/filed',
  'project/Foundation/TaxCategory/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'TaxCategoryGridPanel',

    recordType: 'TaxCategoryRecord',

    properties: filed,

    store: store
  }
});
