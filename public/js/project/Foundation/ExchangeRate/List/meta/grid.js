/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description 
 */
define([
  'project/Foundation/ExchangeRate/List/meta/filed',
  'project/Foundation/ExchangeRate/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'ExchangeRateGridPanel',
    
    recordType: 'ExchangeRateRecord',

    properties: filed,

    store: gridStore
  }
});
