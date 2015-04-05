/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 20:00:30
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/GroupGridModule',
  'common/module/GroupModule',
  'project/Foundation/Customer/List/meta/grid',
  'project/Foundation/Customer/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var GroupGridModule;

  /*过滤表格模块*/
  GroupGridModule = Q.Class.define(GroupGridModule, {

    type: 'CustomerGroupGridModule',

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

  return GroupGridModule;
});
