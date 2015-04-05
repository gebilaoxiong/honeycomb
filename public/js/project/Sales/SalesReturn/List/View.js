/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Sales/SalesReturn/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var SalesReturnListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  SalesReturnListView = Q.Class.define(ListView, {

    type: 'SalesReturnListView',

    tbar: tbar,

    title: '销售退货单列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return SalesReturnListView;
});