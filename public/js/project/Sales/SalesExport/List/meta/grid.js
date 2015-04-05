/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:05
 * @description 
 */
define([
  'project/Sales/SalesExport/List/meta/filed',
  'project/Sales/SalesExport/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'SalesExportGridPanel',
    
    recordType: 'SalesExportRecord',

    properties: filed,

    store: gridStore
  }
});
