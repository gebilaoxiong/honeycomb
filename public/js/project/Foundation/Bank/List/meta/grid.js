/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/Bank/List/meta/filed',
  'project/Foundation/Bank/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'BankGridPanel',

    recordType: 'BankRecord',

    properties: filed,

    store: store
  }
});
