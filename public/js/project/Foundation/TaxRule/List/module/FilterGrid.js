/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:15:53
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Foundation/TaxRule/List/meta/grid',
  'project/Foundation/TaxRule/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var TaxRuleFilterGridModule;

  /*过滤表格模块*/
  TaxRuleFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'TaxRuleFilterGridModule',

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

  return TaxRuleFilterGridModule;
});
