/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 00:34:47
 * @description
 */
define([
  'common/factory/TypeFactory',
  'common/widget/FormLayoutPanel',
  'project/Foundation/Vendor/Detail/widget/FinanceFormPanel',
  'project/Foundation/Vendor/Detail/meta/bankGrid'
], function(TypeFactory, FormLayoutPanel, FinanceFormPanel, bankGrid) {

  var FinancePanel;

  FinancePanel = Q.Class.define(FormLayoutPanel, {

    type: 'VendorFinancePanel',

    layout: 'fitwidth',

    items: [{
      alias:'financeFormPanel',
      xtype: FinanceFormPanel
    }, {
      alias:'bank',
      xtype: TypeFactory.create('module.grid.editor', bankGrid)
    }]
  })

  return FinancePanel;
})