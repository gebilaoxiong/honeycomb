/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-08 22:43:55
 * @description 
 */
define([
  'common/view/Detail/View',
  'project/Foundation/Material/Detail/data/viewApi',
  'project/Foundation/Material/Detail/widget/InfoFormPanel',
  'project/Foundation/Material/Detail/module/TabModule'
], function(DetailView, viewApi, InfoFormPanel, TabModule) {

  var MaterialDetailView, tbar;

  /*工具栏*/
  tbar = [{
    text: '新增',
    handler: 'createNew'
  }, {
    text: '保存'
  }, {
    text: '暂存'
  }, {
    text: '提交'
  }, {
    text: '审核'
  }, {
    text: '反审核'
  }];

  MaterialDetailView = Q.Class.define(DetailView, {

    type: 'MaterialDetailView',

    title: '物料',

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

  return MaterialDetailView;
})