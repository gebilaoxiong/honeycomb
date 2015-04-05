/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:45:23
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/System/PermissionDataRule/List/meta/grid',
  'project/System/PermissionDataRule/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var PermissionDataRuleFilterGridModule;

  /*过滤表格模块*/
  PermissionDataRuleFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'PermissionDataRuleFilterGridModule',

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

  return PermissionDataRuleFilterGridModule;
});
