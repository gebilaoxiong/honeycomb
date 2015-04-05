/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:44
 * @description
 */

define([
  'common/view/List/View',
  'project/System/Role/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var RoleListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  RoleListView = Q.Class.define(ListView, {

    type: 'RoleListView',

    tbar: tbar,

    title: '角色列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return RoleListView;
});