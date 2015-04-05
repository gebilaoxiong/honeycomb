/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Sales/ReturnNote/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var ReturnNoteListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  ReturnNoteListView = Q.Class.define(ListView, {

    type: 'ReturnNoteListView',

    tbar: tbar,

    title: '退货通知单列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return ReturnNoteListView;
});