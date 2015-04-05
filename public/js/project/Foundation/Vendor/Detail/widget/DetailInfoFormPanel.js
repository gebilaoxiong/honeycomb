/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:49:15
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Organization/widget/form/SearchComboBox',
  'projectCommon/Foundation/Country/widget/form/ComboBox',
  'projectCommon/Foundation/Region/widget/form/ComboBox',
  'projectCommon/Foundation/Company/widget/form/CategoryComboBox',
  'projectCommon/Foundation/Company/widget/form/TypeComboBox',
  'projectCommon/Foundation/Company/widget/form/ScaleComboBox',
  'projectCommon/Foundation/Industry/widget/form/ComboBox',
  'projectCommon/Foundation/Department/widget/form/SearchComboBox',
  'projectCommon/Foundation/BusinessWorker/widget/form/SearchComboBox',
  'projectCommon/Foundation/Vendor/widget/form/CategoryComboBox',
  'projectCommon/Foundation/Vendor/widget/form/TypeComboBox',
  'projectCommon/Foundation/Vendor/widget/form/LevelComboBox'
], function(
  $,
  FormLayoutPanel,
  OrganizationSearchComboBox,
  CountryComboBox,
  RegionComboBox,
  CompanyCategoryComboBox,
  CompanyTypeComboBox,
  CompanyScaleComboBox,
  IndustryComboBox,
  DepartmentSearchComboBox,
  BusinessWorkerSearchComboBox,
  VendorCategoryComboBox,
  VendorTypeComboBox,
  VendorLevelComboBox
) {

  var DetailInfoFormPanel,
    form = $.form;

  DetailInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'VendorDetailInfoFormPanel',

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
        name: 'mailingAddress',
        fieldLabel: '通讯地址'
      }, {
        name: 'postcode',
        fieldLabel: '邮政编码'
      }, {
        name: 'language',
        fieldLabel: '语言'
      }, {
        xtype: form.TextArea,
        name: 'website',
        fieldLabel: '公司网址'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: IndustryComboBox,
        name: 'industry',
        fieldLabel: '行业'
      }, {
        xtype: form.DateField,
        name: 'established',
        fieldLabel: '创立日期'
      }, {
        name: 'corp',
        fieldLabel: '法人代表'
      }, {
        name: 'registerMoney',
        fieldLabel: '注册资金(万元)'
      }, {
        name: 'businessRegistrationId',
        fieldLabel: '工商登记号'
      }, {
        name: 'businessCertificateId',
        fieldLabel: '生产经营许可证'
      }, {
        xtype: form.TextArea,
        name: 'registerAddress',
        fieldLabel: '注册地址'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: DepartmentSearchComboBox,
        name: 'responsibleDepartment',
        fieldLabel: '负责部门'
      }, {
        xtype: BusinessWorkerSearchComboBox,
        name: 'leader',
        fieldLabel: '负责人'
      }, {
        xtype: VendorCategoryComboBox,
        name: 'vendorCategory',
        fieldLabel: '供应商分类'
      }, {
        xtype: VendorTypeComboBox,
        name: 'vendorType',
        fieldLabel: '供应商类别'
      }, {
        xtype: VendorLevelComboBox,
        name: 'vendorLevel',
        fieldLabel: '供应商等级'
      }, {
        name: 'vendorGroup',
        fieldLabel: '供应商分组'
      }, {
        xtype: CompanyCategoryComboBox,
        name: 'companyCategory',
        fieldLabel: '公司类别'
      }, {
        xtype: CompanyTypeComboBox,
        name: 'companyNature',
        fieldLabel: '公司性质'
      }, {
        xtype: CompanyScaleComboBox,
        name: 'companyScale',
        fieldLabel: '公司规模'
      }, {
        //对应组织
        xtype: OrganizationSearchComboBox,
        name: 'dockingOrg',
        fieldLabel: '对应组织'
      }]
    }]
  })

  return DetailInfoFormPanel;
})