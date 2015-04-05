/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 21:47:31
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Currency/widget/form/SearchComboBox',
  'projectCommon/Foundation/Department/widget/form/SearchComboBox',
  'projectCommon/Foundation/BusinessGroup/widget/form/SearchComboBox',
  'projectCommon/Foundation/BusinessWorker/widget/form/SearchComboBox',
  'projectCommon/Foundation/TaxRate/widget/form/SearchComboBox',
  'projectCommon/Foundation/PaymentsType/widget/form/SearchComboBox',
  'projectCommon/Foundation/ReceiptCondition/widget/form/SearchComboBox',
  'projectCommon/Foundation/TaxCategory/widget/form/ComboBox',
  'projectCommon/Foundation/InvoiceType/widget/form/ComboBox',
  'projectCommon/Sales/SalesPrice/widget/form/SearchComboBox',
  'projectCommon/Sales/SalesDiscount/widget/form/SearchComboBox'
], function(
  $,
  FormLayoutPanel,
  CurrencySearchComboBox,
  DepartmentSearchComboBox,
  BusinessGroupSearchComboBox,
  BusinessWorkerSearchComboBox,
  TaxRateSearchComboBox,
  PaymentsTypeSearchComboBox,
  ReceiptConditionSearchComboBox,
  TaxCategoryComboBox,
  InvoiceTypeComboBox,
  SalesPriceSearchComboBox,
  SalesDiscountSearchComboBox
) {

  var BusinessFormPanel,
    form = $.form;

  BusinessFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'CustomerBusinessFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: CurrencySearchComboBox,
        name: 'settlementCurrency',
        fieldLabel: '结算币种'
      }, {
        xtype: DepartmentSearchComboBox,
        name: 'salesDepartment',
        fieldLabel: '销售部门'
      }, {
        xtype: BusinessGroupSearchComboBox,
        name: 'salesGroup',
        fieldLabel: '销售组'
      }, {
        xtype: BusinessWorkerSearchComboBox,
        name: 'saler',
        fieldLabel: '销售员'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: PaymentsTypeSearchComboBox,
        name: 'paymentsType',
        fieldLabel: '结算方式'
      }, {
        xtype: ReceiptConditionSearchComboBox,
        name: 'receiptCondition',
        fieldLabel: '收款条件'
      }, {
        xtype: SalesPriceSearchComboBox,
        name: 'salesPrice',
        fieldLabel: '价目表'
      }, {
        xtype:SalesDiscountSearchComboBox,
        name: 'salesDiscount',
        fieldLabel: '折扣表'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'leadTime',
        fieldLabel: '运输提前期'
      }, {
        xtype: TaxCategoryComboBox,
        name: 'taxCategory',
        fieldLabel: '税分类'
      }, {
        xtype: InvoiceTypeComboBox,
        name: 'invoiceType',
        fieldLabel: '发票类型'
      }, {
        xtype: TaxRateSearchComboBox,
        name: 'taxRate',
        fieldLabel: '默认税率'
      }, {
        xtype: form.Checkbox,
        name: 'creditManage',
        boxLabel: '启用信用管理'
      }, {
        name: 'priority',
        fieldLabel: '客户优先级',
        value: 1
      }]
    }]
  });

  return BusinessFormPanel;
});