/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 19:42:06
 * @description 
 */
define([
  'project/Foundation/Vendor/List/meta/filed',
  'project/Foundation/Vendor/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'VendorGridPanel',
    
    recordType: 'VendorRecord',

    properties: filed,

    store: gridStore
  }
});
