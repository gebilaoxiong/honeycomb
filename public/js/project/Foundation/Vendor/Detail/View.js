/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:18:29
 * @description
 */
define([
  'common/view/Detail/View',
  'project/Foundation/Vendor/Detail/data/viewApi',
  'project/Foundation/Vendor/Detail/widget/InfoFormPanel',
  'project/Foundation/Vendor/Detail/module/TabModule'
], function(DetailView, viewApi, InfoFormPanel, TabModule) {

  var VendorDetailView, tbar;

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

  VendorDetailView = Q.Class.define(DetailView, {

    type: 'VendorDetailView',

    title: '供应商',

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

  return VendorDetailView;
})