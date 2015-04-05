/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/WorkShift/List/meta/filed',
  'project/Foundation/WorkShift/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'WorkShiftGridPanel',
    
    recordType: 'WorkShiftRecord',

    properties: filed,

    store: gridStore
  }
});
