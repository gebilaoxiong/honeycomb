/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description
 */
define([
  'project/Foundation/Currency/List/meta/filed',
  'project/Foundation/Currency/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'CurrencyGridPanel',

    recordType: 'CurrencyRecord',

    properties: filed,

    store: store
  }
});