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
  'project/Foundation/Organization/List/meta/grid',
  'project/Foundation/Organization/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var OrganizationListFilterGridModule;

  /*过滤表格模块*/
  OrganizationListFilterGridModule = Q.Class.define(GroupGridModule, {

    type: 'OrganizationGroupGridModule',

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

  return OrganizationListFilterGridModule;
});