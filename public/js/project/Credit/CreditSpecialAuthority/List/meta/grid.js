/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:01
 * @description 
 */
define([
  'project/Credit/CreditSpecialAuthority/List/meta/filed',
  'project/Credit/CreditSpecialAuthority/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CreditSpecialAuthorityGridPanel',
    
    recordType: 'CreditSpecialAuthorityRecord',

    properties: filed,

    store: gridStore
  }
});
