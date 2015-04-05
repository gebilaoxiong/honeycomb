/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:09
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/GroupGridModule',
  'common/module/GroupModule',
  'project/Foundation/ExchangeRate/List/meta/grid',
  'project/Foundation/ExchangeRate/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var ExchangeRateGroupGridModule;

  /*过滤表格模块*/
  ExchangeRateGroupGridModule = Q.Class.define(GroupGridModule, {

    type: 'ExchangeRateGroupGridModule',

    items: [{
      /*类别面板*/
      alias: 'groupPanel',
      xtype: GroupModule,
      root: groupRoot
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: TypeFactory.create('module.grid.Paging', gridMeta)
    }]

  });

  return ExchangeRateGroupGridModule;
});
