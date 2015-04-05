/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/WorkCalendarTemplate/List/meta/filed',
  'project/Foundation/WorkCalendarTemplate/List/data/gridStore'
], function(filed,listGridStore) {
  return {
    type: 'WorkCalendarTemplateGridPanel',
    
    recordType: 'WorkCalendarTemplateRecord',

    properties: filed,

    store: listGridStore
  }
});
