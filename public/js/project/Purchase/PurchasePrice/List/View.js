/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Purchase/PurchasePrice/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PurchasePriceListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PurchasePriceListView = Q.Class.define(ListView, {

    type: 'PurchasePriceListView',

    tbar: tbar,

    title: '采购价目表列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PurchasePriceListView;
});