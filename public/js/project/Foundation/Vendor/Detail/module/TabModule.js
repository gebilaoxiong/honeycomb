/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:40:32
 * @description
 */
define([
  'common/factory/TypeFactory',
  'infrastructure/module/TabModule',
  'project/Foundation/Vendor/Detail/widget/DetailInfoFormPanel',
  'project/Foundation/Vendor/Detail/widget/BusinessFormPanel',
  'project/Foundation/Vendor/Detail/widget/OtherInfoFormPanel',
  'project/Foundation/Vendor/Detail/widget/FinancePanel',
  'project/Foundation/Vendor/Detail/meta/addressGrid',
  'project/Foundation/Vendor/Detail/meta/contacterGrid'
], function(
  TypeFactory,
  TabModule,
  DetailInfoFormPanel,
  BusinessFormPanel,
  OtherInfoFormPanel,
  FinancePanel,
  addressGrid,
  contacterGrid
) {

  var TabModule;

  TabModule = Q.Class.define(TabModule, {

    type: 'VendorInfomationTabModule',

    /*模块附加布局属性*/
    cmpDefaults: {
      'infoForm': {
        title: '基本信息'
      },
      'contacter': {
        title: '联系人'
      },
      'businessInfo': {
        title: '商务信息'
      },
      'financeInfo': {
        title: '财务信息'
      },
      'address': {
        title: '组织信息'
      },
      'otherInfo': {
        title: '其他信息'
      }
    },

    items: [{
      alias: 'infoForm',
      xtype: DetailInfoFormPanel
    }, {
      //联系人
      alias: 'contacter',
      xtype: TypeFactory.create('module.grid.editor', contacterGrid)
    }, {
      //商务信息
      alias: 'businessInfo',
      xtype: BusinessFormPanel
    }, {
      //财务信息
      alias: 'financeInfo',
      xtype: FinancePanel
    }, {
      //组织信息
      alias: 'address',
      xtype: TypeFactory.create('module.grid.editor', addressGrid)
    }, {
      alias: 'otherInfo',
      xtype: OtherInfoFormPanel
    }]
  });

  return TabModule;
});