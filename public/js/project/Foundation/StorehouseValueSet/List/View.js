/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/StorehouseValueSet/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var StorehouseValueSetListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  StorehouseValueSetListView = Q.Class.define(ListView, {

    type: 'StorehouseValueSetListView',

    tbar: tbar,

    title: '仓库值列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return StorehouseValueSetListView;
});
