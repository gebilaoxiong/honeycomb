/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:21
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/SubData/List/module/GroupGrid',
  'project/Foundation/SubData/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGridModule, filterMeta) {

  var SubDataFilterGridModule;

  /*过滤表格模块*/
  SubDataFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'SubDataFilterGridModule',

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

  return SubDataFilterGridModule;
});
