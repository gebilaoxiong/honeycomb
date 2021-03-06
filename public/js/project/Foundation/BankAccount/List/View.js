/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/BankAccount/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var BankAccountListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  BankAccountListView = Q.Class.define(ListView, {

    type: 'BankAccountListView',

    tbar: tbar,

    title: '银行账号',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return BankAccountListView;
});

