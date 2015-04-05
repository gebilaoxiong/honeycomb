/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/PaymentsType/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PaymentsTypeListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PaymentsTypeListView = Q.Class.define(ListView, {

    type: 'PaymentsTypeListView',

    tbar: tbar,

    title: '收款方式',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PaymentsTypeListView;
});

