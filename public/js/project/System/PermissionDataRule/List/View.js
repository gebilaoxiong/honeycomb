/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:45:10
 * @description 
 */

define([
  'common/view/List/View',
  'project/System/PermissionDataRule/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var PermissionDataRuleListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  PermissionDataRuleListView = Q.Class.define(ListView, {

    type: 'PermissionDataRuleListView',

    tbar: tbar,

    title: '数据规则列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return PermissionDataRuleListView;
});