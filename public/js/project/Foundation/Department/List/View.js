/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/Department/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var DepartmentListView, tbar;

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
  DepartmentListView = Q.Class.define(ListView, {

    type: 'DepartmentListView',

    tbar: tbar,

    title: '部门列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return DepartmentListView;
});


