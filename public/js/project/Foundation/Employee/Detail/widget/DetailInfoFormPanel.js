/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-15 23:00:46
 * @description 用户详细信息表格
 */

define([
  'controls',
  'common/widget/FormLayoutPanel'
], function($, FormLayoutPanel) {

  var DetailInfoFormPanel,
    form = $.form;

  DetailInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'EmployeeDetailInfoFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'mobile',
        fieldLabel: '移动电话'
      }, {
        name: 'tell',
        fieldLabel: '固定电话'
      }, {
        name: 'email',
        fieldLabel: '电子邮箱'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: form.TextArea,
        name: 'address',
        fieldLabel: '联系地址'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: form.TextArea,
        name: 'description',
        fieldLabel: '描述'
      }]
    }]
  })

  return DetailInfoFormPanel;
})