/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:27:53
 * @description 
 */

define([
  'common/view/List/View',
  'project/System/PermissionObject/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PermissionObjectListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PermissionObjectListView = Q.Class.define(ListView, {

    type: 'PermissionObjectListView',

    tbar: tbar,

    title: '权限对象列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PermissionObjectListView;
});