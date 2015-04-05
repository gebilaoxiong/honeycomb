/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-17 22:30:12
 * @description  类别表格
 */
define([
  'common/factory/TypeFactory',
  'common/module/GroupGridModule',
  'common/module/GroupModule',
  'project/Foundation/Material/List/meta/grid',
  'project/Foundation/Material/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var MaterialGroupGridModule;

  /*过滤表格模块*/
  MaterialGroupGridModule = Q.Class.define(GroupGridModule, {

    type: 'MaterialGroupGridModule',

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

  return MaterialGroupGridModule;
});