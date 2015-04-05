/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 20:26:40
 * @description 
 */
define([
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Organization/widget/form/SearchComboBox'
], function(FormLayoutPanel, OrganizationSearchComboBox) {

  var InfoFormPanel;

  InfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'VendorInfoFormPanel',

    layout: 'column',

    padding: '20px 0 20px',

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
    },{
      //column 3
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        //简称
        name: 'shortName',
        fieldLabel: '简称',
        allowBlank: false
      }]
    }]
  })

  return InfoFormPanel;
})