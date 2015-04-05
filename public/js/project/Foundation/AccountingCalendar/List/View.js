/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/AccountingCalendar/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var AccountingCalendarListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  AccountingCalendarListView = Q.Class.define(ListView, {

    type: 'AccountingCalendarListView',

    tbar: tbar,

    title: '会计日历',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return AccountingCalendarListView;
});
