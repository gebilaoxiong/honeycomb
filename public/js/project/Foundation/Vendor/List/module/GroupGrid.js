/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 19:40:21
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/GroupGridModule',
  'common/module/GroupModule',
  'project/Foundation/Vendor/List/meta/grid',
  'project/Foundation/Vendor/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var VendorGroupGridModule;

  VendorGroupGridModule = Q.Class.define(GroupGridModule, {

    type: 'VendorGroupGridModule',

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

  return VendorGroupGridModule;
});
