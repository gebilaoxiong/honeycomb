/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Sales/SalesDiscount/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var SalesDiscountListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  SalesDiscountListView = Q.Class.define(ListView, {

    type: 'SalesDiscountListView',

    tbar: tbar,

    title: '销售折扣表列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return SalesDiscountListView;
});