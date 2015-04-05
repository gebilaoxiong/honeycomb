/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Purchase/SourceList/List/meta/filed',
  'project/Purchase/SourceList/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SourceListGridPanel',
    
    recordType: 'SourceListRecord',

    properties: filed,

    store: gridStore
  }
});
