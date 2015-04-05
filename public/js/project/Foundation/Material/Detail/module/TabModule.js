/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-09 21:22:31
 * @description
 */
define([
  'common/factory/TypeFactory',
  'infrastructure/module/TabModule',
  'project/Foundation/Material/Detail/widget/DetailInfoFormPanel',
  'project/Foundation/Material/Detail/widget/InventoryFormPanel',
  'project/Foundation/Material/Detail/widget/MarketFormPanel',
  'project/Foundation/Material/Detail/widget/PurchaseFormPanel',
  'project/Foundation/Material/Detail/widget/QualityFormPanel',
  'project/Foundation/Material/Detail/widget/ProductionFormPanel',
  'project/Foundation/Material/Detail/widget/PlanPropFormPanel',
  'project/Foundation/Material/Detail/widget/PlanControlFormPanel',
  'project/Foundation/Material/Detail/widget/OtherInfoFormPanel'
], function(
  TypeFactory,
  TabModule,
  DetailInfoFormPanel,
  InventoryFormPanel,
  MarketFormPanel,
  PurchaseFormPanel,
  QualityFormPanel,
  ProductionFormPanel,
  PlanPropFormPanel,
  PlanControlFormPanel,
  OtherInfoFormPanel
) {

  var TabModule;

  TabModule = Q.Class.define(TabModule, {

    type: 'MaterialInfomationTabModule',

    /*模块附加布局属性*/
    cmpDefaults: {
      'infoForm': {
        title: '基本'
      },
      'inventory': {
        title: '库存'
      },
      'market': {
        title: '销售'
      },
      'purchase': {
        title: '采购'
      },
      'quality': {
        title: '质量'
      },
      'production': {
        title: '生产'
      },
      'planProp': {
        title: '计划属性'
      },
      'planControl': {
        title: '计划控制'
      },
      'otherInfo': {
        title: '其他'
      }
    },

    items: [{
      alias: 'infoForm',
      xtype: DetailInfoFormPanel
    }, {
      alias: 'inventory',
      xtype: InventoryFormPanel
    },{
      alias:'market',
      xtype:MarketFormPanel
    },{
      alias:'purchase',
      xtype:PurchaseFormPanel
    },{
      alias:'quality',
      xtype:QualityFormPanel
    },{
      alias:'production',
      xtype:ProductionFormPanel
    },{
      alias:'planProp',
      xtype:PlanPropFormPanel
    },{
      alias:'planControl',
      xtype:PlanControlFormPanel
    },{
      alias:'otherInfo',
      xtype:OtherInfoFormPanel
    }]
  });

  return TabModule;
});