/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:38:29
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'common/module/GroupGridModule',
  'common/module/GroupModule',
  'project/Credit/CreditEvaluateIndicator/List/meta/grid',
  'project/Credit/CreditEvaluateIndicator/List/data/groupRoot',
], function(TypeFactory, GroupGridModule, GroupModule, gridMeta, groupRoot) {

  var CreditEvaluateIndicatorGroupGridModule;

  /*过滤表格模块*/
  CreditEvaluateIndicatorGroupGridModule = Q.Class.define(GroupGridModule, {

    type: 'CreditEvaluateIndicatorGroupGridModule',

    items: [{
      /*类别面板*/
      alias: 'groupPanel',
      xtype: GroupModule,
      root: groupRoot
    }, {
      /*表格*/
      alias: 'gridPanel',
      xtype: TypeFactory.create('module.grid.Paging', gridMeta)
    }]

  });

  return CreditEvaluateIndicatorGroupGridModule;
});
