/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:03:25
 * @description 
 */

define([
  'common/view/List/View',
  'project/Credit/CreditEvaluationModel/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var CreditEvaluationModelListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  CreditEvaluationModelListView = Q.Class.define(ListView, {

    type: 'CreditEvaluationModelListView',

    tbar: tbar,

    title: '信用评估模型列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return CreditEvaluationModelListView;
});