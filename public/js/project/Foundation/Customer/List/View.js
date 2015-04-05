/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 20:00:07
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/Customer/List/module/FilterGrid'
], function(ListView, FilterGrid) {

  var CustomerListView, tbar;

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

  /*顾客列表视图*/
  CustomerListView = Q.Class.define(ListView, {

    type: 'CustomerListView',

    tbar: tbar,

    title: '客户列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGrid
    }]
  });

  return CustomerListView;
});

