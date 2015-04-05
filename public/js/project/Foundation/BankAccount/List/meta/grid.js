/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/BankAccount/List/meta/filed',
  'project/Foundation/BankAccount/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'BankAccountGridPanel',

    recordType: 'BankAccountRecord',

    properties: filed,

    store: store
  }
});
