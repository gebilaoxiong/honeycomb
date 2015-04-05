/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:40:32
 * @description
 */
define([
  'common/factory/TypeFactory',
  'infrastructure/module/TabModule',
  'project/Foundation/Customer/Detail/widget/DetailInfoFormPanel',
  'project/Foundation/Customer/Detail/widget/BusinessFormPanel',
  'project/Foundation/Customer/Detail/widget/OtherInfoFormPanel',
  'project/Foundation/Customer/Detail/meta/contacterGrid',
  'project/Foundation/Customer/Detail/meta/bankGrid',
  'project/Foundation/Customer/Detail/meta/addressGrid'
], function(
  TypeFactory,
  TabModule,
  DetailInfoFormPanel,
  BusinessFormPanel,
  OtherInfoFormPanel,
  contacterGrid,
  bankGrid,
  addressGrid
) {

  var TabModule;

  TabModule = Q.Class.define(TabModule, {

    type: 'CustomerInfomationTabModule',

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
      'bankInfo': {
        title: '银行信息'
      },
      'addressInfo': {
        title: '地址信息'
      },
      'otherInfo': {
        title: '其他信息'
      }
    },

    items: [{
      //基本信息
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
      //银行信息
      alias: 'bankInfo',
      xtype: TypeFactory.create('module.grid.editor', bankGrid)
    }, {
      //组织信息
      alias: 'addressInfo',
      xtype: TypeFactory.create('module.grid.editor', addressGrid)
    }, {
      //其他信息
      alias: 'otherInfo',
      xtype: OtherInfoFormPanel
    }]
  });

  return TabModule;
});