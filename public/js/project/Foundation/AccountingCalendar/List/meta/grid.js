/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/AccountingCalendar/List/meta/filed',
  'project/Foundation/AccountingCalendar/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'AccountingCalendarGridPanel',

    recordType: 'AccountingCalendarRecord',

    properties: filed,

    store: store
  }
});
