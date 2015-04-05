/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/WorkSystem/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var WorkSystemListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  WorkSystemListView = Q.Class.define(ListView, {

    type: 'WorkSystemListView',

    tbar: tbar,

    title: '班制列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return WorkSystemListView;
});
