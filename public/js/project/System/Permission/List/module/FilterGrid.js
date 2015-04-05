/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:36:39
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/System/Permission/List/meta/grid',
  'project/System/Permission/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var PermissionFilterGridModule;

  /*过滤表格模块*/
  PermissionFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'PermissionFilterGridModule',

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

  return PermissionFilterGridModule;
});
