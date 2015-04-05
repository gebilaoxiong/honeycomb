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
  'project/Foundation/Department/List/meta/grid',
  'project/Foundation/Department/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var DepartmentListFilterGridModule;

  /*过滤表格模块*/
  DepartmentListFilterGridModule = Q.Class.define(GroupGridModule, {

    type: 'DepartmentGroupGridModule',

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

  return DepartmentListFilterGridModule;
});

