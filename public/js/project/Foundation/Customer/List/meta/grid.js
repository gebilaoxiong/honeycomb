/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 20:01:07
 * @description 
 */
define([
  'project/Foundation/Customer/List/meta/filed',
  'project/Foundation/Customer/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'CustomerGridPanel',
    
    recordType: 'CustomerRecord',

    properties: filed,

    store: gridStore
  }
});
