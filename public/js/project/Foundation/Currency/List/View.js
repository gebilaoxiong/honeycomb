/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/Currency/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var CurrencyListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  CurrencyListView = Q.Class.define(ListView, {

    type: 'CurrencyListView',

    tbar: tbar,

    title: '币别',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return CurrencyListView;
});
