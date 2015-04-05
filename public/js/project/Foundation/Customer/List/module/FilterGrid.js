/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 20:00:40
 * @description 
 */

define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Customer/List/module/GroupGrid',
  'project/Foundation/Customer/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGridModule, filterMeta) {

  var CustomerFilterGridModule;

  /*过滤表格模块*/
  CustomerFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'CustomerFilterGridModule',

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

  return CustomerFilterGridModule;
});