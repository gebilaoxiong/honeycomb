/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/WorkCalendarTemplate/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var WorkCalendarTemplateListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];

  /*列表视图*/
  WorkCalendarTemplateListView = Q.Class.define(ListView, {

    type: 'WorkCalendarTemplateListView',

    tbar: tbar,

    title: '工作日历模板列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return WorkCalendarTemplateListView;
});
