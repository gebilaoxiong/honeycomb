/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-09 21:22:16
 * @description 
 */
define([
  'common/widget/store/HttpJsonStore',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Organization/widget/form/SearchComboBox'
], function(HttpJsonStore, FormLayoutPanel, OrganizationSearchComboBox) {

  var InfoFormPanel;

  InfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'CusomerInfoFormPanel',

    layout: 'column',

    padding: '20px 0 12px',

    items: [{
      //column 1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //创建组织
        xtype: OrganizationSearchComboBox,
        name: 'createOrg',
        fieldLabel: '创建组织'
      }, {
        //编码
        name: 'code',
        fieldLabel: '编码',
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
        //名称
        name: 'name',
        fieldLabel: '名称',
        allowBlank: false
      }]
    }]
  })

  return InfoFormPanel;
})
