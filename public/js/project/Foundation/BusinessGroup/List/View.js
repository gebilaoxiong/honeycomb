/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/BusinessGroup/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var BusinessGroupListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  BusinessGroupListView = Q.Class.define(ListView, {

    type: 'BusinessGroupListView',

    tbar: tbar,

    title: '业务组列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return BusinessGroupListView;
});