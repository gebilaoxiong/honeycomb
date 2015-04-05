/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:53
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/TaxCategory/List/meta/grid',
  'project/Foundation/TaxCategory/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var TaxCategoryFilterGridModule;

  /*过滤表格模块*/
  TaxCategoryFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'TaxCategoryFilterGridModule',

    items: [{
      /*过滤面板*/
      alias: 'filterPanel',
      xtype: TypeFactory.create('module.Filter', filterMeta)
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: TypeFactory.create('module.grid.Paging', gridMeta)
    }]

  });

  return TaxCategoryFilterGridModule;
});
