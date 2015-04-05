/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/AccountingSystem/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var AccountingSystemListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  AccountingSystemListView = Q.Class.define(ListView, {

    type: 'AccountingSystemListView',

    tbar: tbar,

    title: '会计核算体系',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return AccountingSystemListView;
});
