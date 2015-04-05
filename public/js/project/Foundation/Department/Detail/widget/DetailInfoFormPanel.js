/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-15 23:00:46
 * @description 部门详细信息表格
 */

define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Department/widget/form/SearchComboBox'
], function($, FormLayoutPanel, DepartmentSearchComboBox) {

  var DetailInfoFormPanel,
    form = $.form;

  DetailInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'DepartmentDetailInfoFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        name: 'memoni',
        fieldLabel: '助记码'
      }, {
        xtype: DepartmentSearchComboBox,
        name: 'parentDept',
        fieldLabel: '上级部门'
      }, {
        name: 'fullName',
        fieldLabel: '部门全称'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: form.DateField,
        format: 'YYYY/MM/dd',
        name: 'effectDate',
        fieldLabel: '生效时间'
      }, {
        xtype: form.DateField,
        format: 'YYYY/MM/dd',
        name: 'invalidDate',
        fieldLabel: '失效时间'
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