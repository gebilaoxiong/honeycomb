/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-14 15:25:25
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet'
], function($, FormLayoutPanel, FieldSet) {

  var QualityFormPanel, form;

  form = $.form;

  QualityFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialQualityFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      //colum1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '检验设置',
        autoWidth: true,
        items: [{
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '来料校验'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '产品校验'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '库存校验'
        }]
      }, {
        xtype: FieldSet,
        title: '复查设置',
        autoWidth: true,
        items: [{
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '启用库存周期复检'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '启用库存周期复检提醒'
        }, {
          name: 'specification',
          fieldLabel: '复查周期(天)'
        }, {
          name: 'specification',
          fieldLabel: '提前提醒期(天)'
        }]
      }]
    }, {
      //colum2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '方案设置',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '抽样方案'
        }, {
          name: 'specification',
          fieldLabel: '质检方案'
        }]
      }]
    }]

  });

  return QualityFormPanel;
})