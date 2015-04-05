/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-17 22:35:35
 * @description
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Material/List/module/GroupGrid',
  'project/Foundation/Material/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGrid, filterMeta) {

  var MaterialListFilterGridModule;

  /*过滤表格模块*/
  MaterialListFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'MaterialListFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: GroupGrid
    }]

  });

  return MaterialListFilterGridModule;
});