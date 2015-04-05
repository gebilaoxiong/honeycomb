/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:33:52
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/System/Broadcast/List/meta/grid',
  'project/System/Broadcast/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var BroadcastFilterGridModule;

  /*过滤表格模块*/
  BroadcastFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'BroadcastFilterGridModule',

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

  return BroadcastFilterGridModule;
});


