/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/AccountingSystem/List/meta/filed',
  'project/Foundation/AccountingSystem/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'AccountingSystemGridPanel',

    recordType: 'AccountingSystemRecord',

    properties: filed,

    store: store
  }
});
