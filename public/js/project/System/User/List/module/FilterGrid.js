/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:26:41
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/System/User/List/module/GroupGrid',
  'project/System/User/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGrid, filterMeta) {

  var UserFilterGridModule;

  /*过滤表格模块*/
  UserFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'UserFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: GroupGrid
    }]

  });

  return UserFilterGridModule;
});
