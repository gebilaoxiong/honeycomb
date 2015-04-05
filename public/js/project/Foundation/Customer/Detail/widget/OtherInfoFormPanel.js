/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-25 23:39:02
 * @description
 */
define([
  'controls',
  'common/widget/form/BoolComboBox',
  'common/widget/FormLayoutPanel'
], function(
  $,
  BoolComboBox, 
  FormLayoutPanel
) {

  var OtherInfoFormPanel,
    form = $.form;

  OtherInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'CustomerOtherInfoFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'creater',
        readOnly:true,
        fieldLabel: '创建人'
      },{
        xtype:form.DateField,
        name: 'createDate',
        readOnly:true,
        fieldLabel: '创建日期'
      },{
        name: 'modifier',
        readOnly:true,
        fieldLabel: '修改人'
      },{
        xtype:form.DateField,
        name: 'modifiedDate',
        readOnly:true,
        fieldLabel: '修改日期'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'auditor',
        readOnly:true,
        fieldLabel: '审核人'
      },{
        xtype:form.DateField,
        name: 'auditDate',
        readOnly:true,
        fieldLabel: '审核日期'
      },{
        name: 'dataState',
        readOnly:true,
        fieldLabel: '单据状态'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'disabler',
        readOnly:true,
        fieldLabel: '禁用人'
      },{
        xtype:form.DateField,
        name: 'disabledDate',
        readOnly:true,
        fieldLabel: '禁用日期'
      },{
        xtype:BoolComboBox,
        name: 'disabled',
        readOnly:true,
        fieldLabel: '禁用状态'
      }]
    }]
  })

  return OtherInfoFormPanel;
})