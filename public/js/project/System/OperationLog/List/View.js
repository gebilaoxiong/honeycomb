/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:03:25
 * @description 
 */

define([
  'common/view/List/View',
  'project/System/OperationLog/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var OperationLogListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  OperationLogListView = Q.Class.define(ListView, {

    type: 'OperationLogListView',

    tbar: tbar,

    title: '上机操作日志',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return OperationLogListView;
});