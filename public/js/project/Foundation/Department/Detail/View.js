/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-27 01:40:40
 * @description
 */
define([
  'common/view/Detail/View',
  'project/Foundation/Department/Detail/data/viewApi',
  'project/Foundation/Department/Detail/widget/InfoFormPanel',
  'project/Foundation/Department/Detail/module/TabModule'
], function(DetailView, viewApi, InfoFormPanel, TabModule) {

  var DepartmentDetailView, tbar;

  /*工具栏*/
  tbar = [{
    text: '新增',
    handler: 'createNew'
  }, {
    text: '保存',
    handler:'save'
  }, {
    text: '暂存'
  }, {
    text: '提交'
  }, {
    text: '审核'
  }, {
    text: '反审核'
  }];

  /*用户列表画框*/
  DepartmentDetailView = Q.Class.define(DetailView, {

    type: 'DepartmentDetailView',

    title: '部门',

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

  return DepartmentDetailView;
});