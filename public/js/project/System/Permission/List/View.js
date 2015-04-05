/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:35:39
 * @description 
 */

define([
  'common/view/List/View',
  'project/System/Permission/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PermissionListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PermissionListView = Q.Class.define(ListView, {

    type: 'PermissionListView',

    tbar: tbar,

    title: '权限项列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PermissionListView;
});