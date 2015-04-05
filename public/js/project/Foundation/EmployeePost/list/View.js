/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/EmployeePost/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var EmployeePostListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  EmployeePostListView = Q.Class.define(ListView, {

    type: 'EmployeePostListView',

    tbar: tbar,

    title: '员工任岗信息',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return EmployeePostListView;
});

