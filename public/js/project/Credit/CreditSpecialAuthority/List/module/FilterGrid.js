/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:03:55
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/FilterGridModule',
  'project/Credit/CreditSpecialAuthority/List/meta/grid',
  'project/Credit/CreditSpecialAuthority/List/meta/filter'
], function(TypeFactory, FilterGridModule, gridMeta, filterMeta) {

  var CreditSpecialAuthorityFilterGridModule;

  /*过滤表格模块*/
  CreditSpecialAuthorityFilterGridModule = Q.Class.define(FilterGridModule, {

    type: 'CreditSpecialAuthorityFilterGridModule',

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

  return CreditSpecialAuthorityFilterGridModule;
});

