/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:03:25
 * @description 
 */

define([
  'common/view/List/View',
  'project/Credit/CreditCheckingRule/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var CreditCheckingRuleListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  CreditCheckingRuleListView = Q.Class.define(ListView, {

    type: 'CreditCheckingRuleListView',

    tbar: tbar,

    title: '信用检查规则列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return CreditCheckingRuleListView;
});