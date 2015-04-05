/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:18:29
 * @description
 */
define([
  'common/view/Detail/View',
  'project/Foundation/Customer/Detail/data/viewApi',
  'project/Foundation/Customer/Detail/widget/InfoFormPanel',
  'project/Foundation/Customer/Detail/module/TabModule'
], function(DetailView, viewApi, InfoFormPanel, TabModule) {

  var CustomerDetailView, tbar;

  /*工具栏*/
  tbar = [{
    text: '新增',
    handler: 'createNew'
  }, {
    text: '保存',
    handler: 'save'
  }, {
    text: '暂存'
  }, {
    text: '提交'
  }, {
    text: '审核'
  }, {
    text: '反审核'
  }];

  CustomerDetailView = Q.Class.define(DetailView, {

    type: 'CustomerDetailView',

    title: '客户',

    tbar: tbar,

    layout: 'fitwidth',

    api: viewApi,

    /*子模块*/
    items: [{
      /*主要信息面板*/
      alias: 'information',
      xtype: InfoFormPanel
    }, {
      /*明细选项卡面板*/
      alias: 'tabPanel',
      xtype: TabModule
    }]
  });

  return CustomerDetailView;
})