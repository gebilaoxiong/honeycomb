/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Purchase/PurchaseReceipt/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PurchaseReceiptListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PurchaseReceiptListView = Q.Class.define(ListView, {

    type: 'PurchaseReceiptListView',

    tbar: tbar,

    title: '采购收料单列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PurchaseReceiptListView;
});