/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:20:21
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/Currency/List/meta/grid',
  'project/Foundation/Currency/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var CurrencyFilterGridModule;

  /*过滤表格模块*/
  CurrencyFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'CurrencyFilterGridModule',

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

  return CurrencyFilterGridModule;
});
