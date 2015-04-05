/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:08:24
 * @description 
 */

define([
  'common/view/List/View',
  'project/Credit/CreditEvaluateIndicator/List/module/FilterGrid'
], function(ListView, FilterGrid) {

  var CreditEvaluateIndicatorListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '新增'
  }, {
    text: '删除'
  }, {
    text: '提交',
    menu: [{
      text: '提交'
    }, {
      text: '撤销'
    }]
  }, {
    text: '审核',
    menu: [{
      text: '审核'
    }, {
      text: '反审核'
    }]
  }];

  /*列表视图*/
  CreditEvaluateIndicatorListView = Q.Class.define(ListView, {

    type: 'CreditEvaluateIndicatorListView',

    tbar: tbar,

    title: '信用评估指标列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGrid
    }]
  });

  return CreditEvaluateIndicatorListView;
});