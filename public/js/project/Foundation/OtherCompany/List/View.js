/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description
 */
define([
  'common/view/List/View',
  'project/Foundation/OtherCompany/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var OtherCompanyListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  OtherCompanyListView = Q.Class.define(ListView, {

    type: 'OtherCompanyListView',

    tbar: tbar,

    title: '其他来往单位',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return OtherCompanyListView;
});