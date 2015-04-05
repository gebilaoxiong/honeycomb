/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/ReceiptCondition/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var ReceiptConditionListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  ReceiptConditionListView = Q.Class.define(ListView, {

    type: 'ReceiptConditionListView',

    tbar: tbar,

    title: '收款条件',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return ReceiptConditionListView;
});
