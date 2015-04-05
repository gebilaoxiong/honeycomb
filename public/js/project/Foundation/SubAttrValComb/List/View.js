/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:38
 * @description 
 */
define([
  'common/view/List/View',
  'project/Foundation/SubAttrValComb/List/module/FilterGrid'
], function(ListView, FilterGridModule) {

  var SubAttrValCombListView, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, ' ', {
    text: '禁用'
  }, ' ', {
    text: '删除'
  }];


  /*列表视图*/
  SubAttrValCombListView = Q.Class.define(ListView, {

    type: 'SubAttrValCombListView',

    tbar: tbar,

    title: '辅助属性值组合列表',

    items: [{
      alias: 'gridModule',
      xtype: FilterGridModule
    }]
  });

  return SubAttrValCombListView;
});
