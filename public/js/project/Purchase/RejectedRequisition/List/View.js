/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/Purchase/RejectedRequisition/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var RejectedRequisitionListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  RejectedRequisitionListView = Q.Class.define(ListView, {

    type: 'RejectedRequisitionListView',

    tbar: tbar,

    title: '退料申请单列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return RejectedRequisitionListView;
});