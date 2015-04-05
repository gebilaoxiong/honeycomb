/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-27 01:17:43
 * @description
 */
define([
  'common/view/List/View',
  'project/Foundation/Employee/list/data/viewApi',
  'project/Foundation/Employee/list/module/FilterGrid'
], function(ListView, viewApi, FilterGrid) {

  var EmployeeListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新',
    handler: 'reload'
  }, ' ', {
    text: '新增'
  }, {
    text: '删除',
    handler: 'removeSelectedRecords'
  }, {
    text: '提交',
    handler: 'auditSelectedRecords'
  }, {
    text: '撤销',
    handler: 'cancelSelectedRecords'
  }, {
    text: '审核',
    handler: 'consentSelectedRecords'
  }, {
    text: '反审核',
    handler: 'rejectSelectedRecords'
  }];


  /*列表视图*/
  EmployeeListView = Q.Class.define(ListView, {

    type: 'EmployeeListView',

    tbar: tbar,

    title: '员工列表',

    api: viewApi,

    items: [{
      alias: 'gridModule',
      xtype: FilterGrid
    }]
  });

  return EmployeeListView;
});