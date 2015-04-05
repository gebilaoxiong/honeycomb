/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-17 22:24:55
 * @description
 */
define([
  'common/view/List/View',
  'project/Foundation/Material/List/module/FilterGrid'
], function(ListView, FilterGrid) {

  var MaterialListView, tbar;

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

  /*原料列表视图*/
  MaterialListView = Q.Class.define(ListView, {

    type: 'MaterialListView',

    tbar: tbar,

    title: '物料列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGrid
    }]
  });

  return MaterialListView;
});