/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-14 17:50:11
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet'
], function($, FormLayoutPanel, FieldSet) {

  var PlanPropFormPanel,form;

  form=$.form;

  PlanPropFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialPlanPropFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      //column 1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '计划',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '计划策略'
        }, {
          name: 'specification',
          fieldLabel: '制造策略'
        }, {
          name: 'specification',
          fieldLabel: '订货策略'
        }, {
          name: 'specification',
          fieldLabel: '计划区'
        }]
      }, {
        xtype: FieldSet,
        title: '提前期',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '固定提前期'
        }, {
          name: 'specification',
          fieldLabel: '单位'
        }, {
          name: 'specification',
          fieldLabel: '变动提前期'
        }, {
          name: 'specification',
          fieldLabel: '单位'
        }, {
          name: 'specification',
          fieldLabel: '校验提前期'
        }, {
          name: 'specification',
          fieldLabel: '单位'
        }]
      }]
    }, {
      //column 2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '订货间隔期',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '订货间隔期单位'
        }, {
          name: 'specification',
          fieldLabel: '订货间隔期'
        }]
      }, {
        xtype: FieldSet,
        title: '批量控制',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '最大订货量'
        }, {
          name: 'specification',
          fieldLabel: '最小订货量'
        }, {
          name: 'specification',
          fieldLabel: '批量增量'
        }, {
          name: 'specification',
          fieldLabel: '固定/经济批量'
        }, {
          name: 'specification',
          fieldLabel: '变动提前期批量'
        }]
      }]
    }, {
      //column 2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '时界控制',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '需求时界'
        }, {
          name: 'specification',
          fieldLabel: '计划时界'
        }]
      },{
        xtype: FieldSet,
        title: '其他',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '计划组'
        }, {
          name: 'specification',
          fieldLabel: '计划员'
        }, {
          xtype:form.Checkbox,
          name: 'specification',
          boxLabel: 'MRP计算是否合并需求'
        }, {
          name: 'specification',
          fieldLabel: '预留类型'
        }, {
          name: 'specification',
          fieldLabel: '安全库存'
        }]
      }]
    }]

  });

  return PlanPropFormPanel;
})