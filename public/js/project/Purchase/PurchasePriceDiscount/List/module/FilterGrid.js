/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:58:57
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Purchase/PurchasePriceDiscount/List/meta/grid',
  'project/Purchase/PurchasePriceDiscount/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var PurchasePriceDiscountFilterGridModule;

  /*过滤表格模块*/
  PurchasePriceDiscountFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'PurchasePriceDiscountFilterGridModule',

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

  return PurchasePriceDiscountFilterGridModule;
});
