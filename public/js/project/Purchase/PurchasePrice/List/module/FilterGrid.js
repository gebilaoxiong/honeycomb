/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:57
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Purchase/PurchasePrice/List/meta/grid',
  'project/Purchase/PurchasePrice/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var PurchasePriceFilterGridModule;

  /*过滤表格模块*/
  PurchasePriceFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'PurchasePriceFilterGridModule',

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

  return PurchasePriceFilterGridModule;
});
