/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:33:42
 * @description 
 */

define([
  'common/view/List/View',
  'project/System/Broadcast/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var BroadcastListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  BroadcastListView = Q.Class.define(ListView, {

    type: 'BroadcastListView',

    tbar: tbar,

    title: '广播消息列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return BroadcastListView;
});