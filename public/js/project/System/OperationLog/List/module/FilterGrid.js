/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:03:55
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/System/OperationLog/List/meta/grid',
  'project/System/OperationLog/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var OperationLogFilterGridModule;

  /*过滤表格模块*/
  OperationLogFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'OperationLogFilterGridModule',

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

  return OperationLogFilterGridModule;
});

