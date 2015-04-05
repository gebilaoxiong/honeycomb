/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/RejectedRequisition/List/meta/filed',
  'project/Purchase/RejectedRequisition/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'RejectedRequisitionGridPanel',
    
    recordType: 'RejectedRequisitionRecord',

    properties: filed,

    store: gridStore
  }
});
