/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:28:03
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/System/PermissionObject/List/meta/grid',
  'project/System/PermissionObject/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var PermissionObjectFilterGridModule;

  /*过滤表格模块*/
  PermissionObjectFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'PermissionObjectFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: TypeFactory.create('module.grid.Paging', gridMeta)
    }]

  });

  return PermissionObjectFilterGridModule;
});