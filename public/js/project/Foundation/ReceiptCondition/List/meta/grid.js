/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/ReceiptCondition/List/meta/filed',
  'project/Foundation/ReceiptCondition/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'ReceiptConditionGridPanel',

    recordType: 'ReceiptConditionRecord',

    properties: filed,

    store: store
  }
});
