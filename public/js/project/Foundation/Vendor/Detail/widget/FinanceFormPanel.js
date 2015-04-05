/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 00:29:03
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Customer/widget/form/SearchComboBox',
  'projectCommon/Foundation/Currency/widget/form/SearchComboBox',
  'projectCommon/Foundation/PaymentsType/widget/form/SearchComboBox',
  'projectCommon/Foundation/ReceiptCondition/widget/form/SearchComboBox',
  'projectCommon/Foundation/Vendor/widget/form/SearchComboBox',
  'projectCommon/Foundation/TaxCategory/widget/form/ComboBox',
  'projectCommon/Foundation/TaxType/widget/form/ComboBox',
  'projectCommon/Foundation/InvoiceType/widget/form/ComboBox',
  'projectCommon/Foundation/TaxRate/widget/form/SearchComboBox'
], function(
  $,
  FormLayoutPanel,
  CustomerSearchComboBox,
  CurrencySearchComboBox,
  PaymentsTypeSearchComboBox,
  ReceiptConditionSearchComboBox,
  VendorSearchComboBox,
  TaxCategoryComboBox,
  TaxTypeComboBox,
  InvoiceTypeComboBox,
  TaxRateSearchComboBox
) {

  var FinanceFormPanel, form;

  form = $.form;

  FinanceFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'VendorFinanceFormPanel',

    layout: 'column',

    padding: '20px 0 15px',

    items: [{
      //column 1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //对应客户
        xtype: CustomerSearchComboBox,
        name: 'dockingCustomer',
        fieldLabel: '对应客户'
      }, {
        //结算币别
        xtype: CurrencySearchComboBox,
        name: 'paymentsCurrency',
        fieldLabel: '结算币别',
        allowBlank: false
      }, {
        //结算方式
        xtype: PaymentsTypeSearchComboBox,
        name: 'paymentsType',
        fieldLabel: '结算方式',
        allowBlank: false
      }, {
        //付款条件
        xtype: ReceiptConditionSearchComboBox,
        name: 'receiptCondition',
        fieldLabel: '付款条件',
        allowBlank: false
      }, {
        //结算方
        xtype: VendorSearchComboBox,
        name: 'paymentSide',
        fieldLabel: '结算方',
        allowBlank: false
      }]
    }, {
      //column 2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //单次预付额度
        xtype: form.NumberField,
        name: 'paymentAmount',
        fieldLabel: '单次预付额度'
      }, {
        //税分类
        xtype: TaxCategoryComboBox,
        name: 'taxCategory',
        fieldLabel: '税分类'
      }, {
        //税务登记号
        name: 'taxId',
        fieldLabel: '税务登记号'
      }, {
        //经营类型
        xtype: TaxTypeComboBox,
        name: 'taxType',
        fieldLabel: '经营类型'
      }, {
        //收款方
        xtype: VendorSearchComboBox,
        name: 'receiptSide',
        fieldLabel: '收款方'
      }]
    }, {
      //column 3
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //发票类型
        xtype:InvoiceTypeComboBox,
        name: 'invoiceType',
        fieldLabel: '发票类型'
      }, {
        //默认税率
        xtype: TaxRateSearchComboBox,
        name: 'taxRate',
        fieldLabel: '默认税率'
      }, {
        //描述
        xtype: form.TextArea,
        name: 'description',
        fieldLabel: '描述'
      }]
    }]
  })

  return FinanceFormPanel;
})