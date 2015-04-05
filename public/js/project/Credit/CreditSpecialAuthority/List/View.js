/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:03:25
 * @description 
 */

define([
  'common/view/List/View',
  'project/Credit/CreditSpecialAuthority/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var CreditSpecialAuthorityListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  CreditSpecialAuthorityListView = Q.Class.define(ListView, {

    type: 'CreditSpecialAuthorityListView',

    tbar: tbar,

    title: '信用特批权限列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return CreditSpecialAuthorityListView;
});