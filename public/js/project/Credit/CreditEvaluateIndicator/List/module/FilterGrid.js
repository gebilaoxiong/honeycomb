/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:26:41
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Credit/CreditEvaluateIndicator/List/module/GroupGrid',
  'project/Credit/CreditEvaluateIndicator/List/meta/filter'
], function(TypeFactory, FilterGridModule, GroupGrid, filterMeta) {

  var CreditEvaluateIndicatorFilterGridModule;

  /*过滤表格模块*/
  CreditEvaluateIndicatorFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'CreditEvaluateIndicatorFilterGridModule',

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

  return CreditEvaluateIndicatorFilterGridModule;
});
