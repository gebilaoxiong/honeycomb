/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/Bank/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var BankListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  BankListView = Q.Class.define(ListView, {

    type: 'BankListView',

    tbar: tbar,

    title: '银行',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return BankListView;
});
