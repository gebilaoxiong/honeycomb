/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/PostReport/List/meta/filed',
  'project/Foundation/PostReport/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'PostReportGridPanel',
    
    recordType: 'PostReportRecord',

    properties: filed,

    store: gridStore
  }
});
