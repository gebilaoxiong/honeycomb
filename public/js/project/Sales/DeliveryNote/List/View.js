/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Sales/DeliveryNote/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var DeliveryNoteListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  DeliveryNoteListView = Q.Class.define(ListView, {

    type: 'DeliveryNoteListView',

    tbar: tbar,

    title: '发货通知单列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return DeliveryNoteListView;
});