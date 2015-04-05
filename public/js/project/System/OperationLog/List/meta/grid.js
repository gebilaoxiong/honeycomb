/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:01
 * @description 
 */
define([
  'project/System/OperationLog/List/meta/filed',
  'project/System/OperationLog/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'OperationLogGridPanel',
    
    recordType: 'OperationLogRecord',

    properties: filed,

    store: gridStore
  }
});
