/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-15 23:00:46
 * @description 部门属性信息表格
 */

define([
  'controls',
  'common/widget/FormLayoutPanel',
  'projectCommon/Foundation/Department/widget/form/CategoryComboBox'
], function($, FormLayoutPanel, CategoryComboBox) {

  var AttributeInfoFormPanel,
    form = $.form;

  AttributeInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'DepartmentAttributeInfoFormPanel',

    layout: 'column',

    padding: '20px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: CategoryComboBox,
        name: 'type',
        fieldLabel: '部门属性'
      }]
    }]
  })

  return AttributeInfoFormPanel;
})