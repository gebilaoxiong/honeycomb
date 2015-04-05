/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description
 */
define([
  'common/view/List/View',
  'project/Foundation/TaxRate/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var TaxRateListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];

  /*列表视图*/
  TaxRateListView = Q.Class.define(ListView, {

    type: 'TaxRateListView',

    tbar: tbar,

    title: '税率列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return TaxRateListView;
});