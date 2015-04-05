/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-27 01:40:40
 * @description
 */
define([
  'common/view/Detail/View',
  'project/Foundation/Employee/Detail/data/viewApi',
  'project/Foundation/Employee/Detail/widget/InfoFormPanel',
  'project/Foundation/Employee/Detail/module/TabModule'
], function(DetailView, viewApi, InfoFormPanel, TabModule) {

  var EmployeeDetailView, tbar;

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
  EmployeeDetailView = Q.Class.define(DetailView, {

    type: 'EmployeeDetailView',

    title: '员工',

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

  return EmployeeDetailView;
});