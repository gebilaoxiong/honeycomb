/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Purchase/PurchaseOrderAlter/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PurchaseOrderAlterListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PurchaseOrderAlterListView = Q.Class.define(ListView, {

    type: 'PurchaseOrderAlterListView',

    tbar: tbar,

    title: '采购订单变更列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PurchaseOrderAlterListView;
});