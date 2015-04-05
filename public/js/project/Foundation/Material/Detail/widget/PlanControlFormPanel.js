/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-14 18:28:03
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet'
], function(
  $,
  FormLayoutPanel,
  FieldSet
) {

  var PlanControlFormPanel, form;

  form = $.form;

  PlanControlFormPanel = Q.Class.define(FormLayoutPanel, {

    xtype: 'MaterialPlanControlFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      //column 1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '计划控制',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '允许提前天数'
        }, {
          name: 'specification',
          fieldLabel: '提前宽限期'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '预计入库允许部分提前'
        }, {
          name: 'specification',
          fieldLabel: '允许延后天数'
        }, {
          name: 'specification',
          fieldLabel: '延后宽限期'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '预计入库允许部分延后'
        }]
      }]
    }, {
      //column 1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '计划偏置',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '时间单位'
        }, {
          name: 'specification',
          fieldLabel: '偏置时间'
        }, {
          name: 'specification',
          fieldLabel: '供应来源'
        }]
      }, {
        xtype: FieldSet,
        title: '优先级计算参数',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '时间紧迫系数'
        }, {
          name: 'specification',
          fieldLabel: '数量负荷系数'
        }]
      }]
    }]

  });

  return PlanControlFormPanel;
});