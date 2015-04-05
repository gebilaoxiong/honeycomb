/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/WorkCalendar/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var WorkCalendarListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  WorkCalendarListView = Q.Class.define(ListView, {

    type: 'WorkCalendarListView',

    tbar: tbar,

    title: '工作日历列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return WorkCalendarListView;
});
