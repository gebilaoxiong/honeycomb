/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 21:47:31
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/BusinessGroup/widget/form/SearchComboBox',
  'projectCommon/Foundation/Vendor/widget/form/SearchComboBox',
  'projectCommon/Sales/SalesPrice/widget/form/SearchComboBox',
  'projectCommon/Sales/SalesDiscount/widget/form/SearchComboBox'
], function(
  $,
  FormLayoutPanel,
  BusinessGroupSearchComboBox,
  VendorSearchComboBox,
  SalesPriceSearchComboBox,
  SalesDiscountSearchComboBox
) {

  var BusinessFormPanel,
    form = $.form;

  BusinessFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'VendorBusinessFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: BusinessGroupSearchComboBox,
        name: 'purchasingGroup',
        fieldLabel: '采购组'
      }, {
        name: 'businessType',
        readOnly:true,
        fieldLabel: '业务状态'
      }, {
        name: 'freezeRegion',
        readOnly:true,
        fieldLabel: '冻结范围'
      }, {
        name: 'freezer',
        readOnly:true,
        fieldLabel: '冻结人'
      }, {
        name: 'freezeDate',
        readOnly:true,
        fieldLabel: '冻结日期'
      }, {
        xtype: VendorSearchComboBox,
        name: 'summaryCompany',
        fieldLabel: '汇总公司'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype:SalesPriceSearchComboBox,
        name: 'salesPrice',
        fieldLabel: '默认价目表'
      }, {
        xtype:SalesDiscountSearchComboBox,
        name: 'salesDiscount',
        fieldLabel: '默认折扣表'
      }, {
        xtype:VendorSearchComboBox,
        name: 'provider',
        fieldLabel: '供货方'
      }, {
        name: 'salesDiscount',
        fieldLabel: '默认WIP仓库'
      }, {
        name: 'salesDiscount',
        fieldLabel: '默认WIP仓位'
      }, {
        name: 'salesDiscount',
        fieldLabel: 'VMI仓库'
      }, {
        xtype: form.Checkbox,
        name: 'creditManage',
        boxLabel: 'VMI业务'
      }]
    }]
  });

  return BusinessFormPanel;
});