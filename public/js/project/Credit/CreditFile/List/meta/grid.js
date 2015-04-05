/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:01
 * @description 
 */
define([
  'project/Credit/CreditFile/List/meta/filed',
  'project/Credit/CreditFile/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CreditFileGridPanel',
    
    recordType: 'CreditFileRecord',

    properties: filed,

    store: gridStore
  }
});
