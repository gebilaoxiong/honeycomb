/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:49:15
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Vendor/widget/form/SearchComboBox',
  'projectCommon/Foundation/Customer/widget/form/SearchComboBox',
  'projectCommon/Foundation/Organization/widget/form/SearchComboBox',
  'projectCommon/Foundation/Country/widget/form/ComboBox',
  'projectCommon/Foundation/Region/widget/form/ComboBox',
  'projectCommon/Foundation/Company/widget/form/CategoryComboBox',
  'projectCommon/Foundation/Company/widget/form/TypeComboBox',
  'projectCommon/Foundation/Company/widget/form/ScaleComboBox',
  'projectCommon/Foundation/Customer/widget/form/CategoryComboBox'
], function(
  $,
  FormLayoutPanel,
  VendorSearchComboBox,
  CustomerSearchComboBox,
  OrganizationSearchComboBox,
  CountryComboBox,
  RegionComboBox,
  CompanyCategoryComboBox,
  CompanyTypeComboBox,
  CompanyScaleComboBox,
  CustomerCategoryComboBox
) {

  var DetailInfoFormPanel,
    form = $.form;

  DetailInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'CustomerDetailInfoFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: CountryComboBox,
        name: 'country',
        fieldLabel: '国家'
      }, {
        xtype: RegionComboBox,
        name: 'region',
        fieldLabel: '地区'
      }, {
        xtype: form.TextArea,
        name: 'address',
        fieldLabel: '通讯地址'
      }, {
        name: 'postcode',
        fieldLabel: '邮政编码'
      }, {
        xtype: form.TextArea,
        name: 'website',
        fieldLabel: '公司网址'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'tell',
        fieldLabel: '联系电话'
      }, {
        name: 'fax',
        fieldLabel: '传真'
      }, {
        name: 'taxId',
        fieldLabel: '税务登记号'
      }, {
        xtype:CompanyCategoryComboBox,
        name: 'companyCategory',
        fieldLabel: '公司类别'
      }, {
        xtype:CompanyTypeComboBox,
        name: 'companyNature',
        fieldLabel: '公司性质'
      }, {
        xtype:CompanyScaleComboBox,
        name: 'companyScale',
        fieldLabel: '公司规模'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //对应供应商
        xtype: VendorSearchComboBox,
        name: 'vendor',
        fieldLabel: '对应供应商'
      }, {
        //对应集团客户
        xtype: CustomerSearchComboBox,
        name: 'groupCustomer',
        fieldLabel: '对应集团客户'
      }, {
        xtype: form.Checkbox,
        name: 'groupCustomer',
        boxLabel: '集团客户'
      }, {
        xtype: form.Checkbox,
        name: 'groupCustomer',
        boxLabel: '默认付款方'
      }, {
        xtype:CustomerCategoryComboBox,
        name: 'customerCategory',
        fieldLabel: '客户类别'
      }, {
        //对应组织
        xtype: OrganizationSearchComboBox,
        name: 'org',
        fieldLabel: '对应组织'
      }, {
        xtype: form.TextArea,
        name: 'note',
        fieldLabel: '备注'
      }]
    }]
  })

  return DetailInfoFormPanel;
})