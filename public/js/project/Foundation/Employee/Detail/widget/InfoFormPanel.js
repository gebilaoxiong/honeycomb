/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-15 22:22:42
 * @description 用户信息表格模块
 */
define([
  'common/widget/store/HttpJsonStore',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Organization/widget/form/SearchComboBox'
], function(HttpJsonStore, FormLayoutPanel, OrganizationSearchComboBox) {

  var InfoFormPanel;

  InfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'EmployeeInfoFormPanel',

    layout: 'column',

    padding: '20px 0 20px',

    items: [{
      //column 1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //创建组织
        xtype: OrganizationSearchComboBox,
        name: 'org',
        fieldLabel: '创建组织'
      }, {
        //员工姓名
        name: 'name',
        fieldLabel: '员工姓名',
        allowBlank: false
      }]
    }, {
      //column 2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //使用组织
        xtype: OrganizationSearchComboBox,
        name: 'useOrg',
        fieldLabel: '使用组织'
      }, {
        //员工编号
        name: 'code',
        fieldLabel: '员工编号',
        allowBlank: false
      }]
    }]
  })

  return InfoFormPanel;
})