/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/WorkCalendar/List/meta/filed',
  'project/Foundation/WorkCalendar/List/data/gridStore'
], function(filed,gridStore) {
  return {
    type: 'WorkCalendarGridPanel',
    
    recordType: 'WorkCalendarRecord',

    properties: filed,

    store: gridStore
  }
});
