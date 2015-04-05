/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 19:39:30
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Vendor/List/module/GroupGrid',
  'project/Foundation/Vendor/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGridModule, filterMeta) {

  var VendorFilterGridModule;

  VendorFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'VendorFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: GroupGridModule
    }]

  });

  return VendorFilterGridModule;
});