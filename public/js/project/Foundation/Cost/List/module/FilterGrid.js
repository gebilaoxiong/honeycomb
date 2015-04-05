/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:21
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Cost/List/module/GroupGrid',
  'project/Foundation/Cost/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGridModule, filterMeta) {

  var CostFilterGridModule;

  /*过滤表格模块*/
  CostFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'CostFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: GroupGridModule
    }]

  });

  return CostFilterGridModule;
});

