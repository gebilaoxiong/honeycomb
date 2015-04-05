/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-27 01:15:35
 * @description
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Employee/list/meta/grid',
  'project/Foundation/Employee/list/meta/filter'
], function(TypeFactory, FilterGridModule, grid, filter) {

  var FilterGridModule;

  /*过滤表格模块*/
  FilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'EmployeeFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filter)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: TypeFactory.create('module.grid.Paging', grid)
    }]

  });

  return FilterGridModule;
});