/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-14 17:26:16
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet'
], function($, FormLayoutPanel, FieldSet) {

  var ProductionFormPanel, form;

  form = $.form;

  ProductionFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialProductionFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      //column1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      //默认label宽度
      defaults: {
        layoutConfig: {
          labelWidth: 120
        }
      },
      items: [{
        xtype: FieldSet,
        title: '生产',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '生产车间'
        }, {
          name: 'specification',
          fieldLabel: '生产单位'
        }, {
          name: 'specification',
          fieldLabel: '入库超收比例(%)'
        }, {
          name: 'specification',
          fieldLabel: '入库欠收比例(%)'
        }]
      }, {
        xtype: FieldSet,
        title: '物料清单',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '子项单位'
        }, {
          name: 'specification',
          fieldLabel: '消耗波动(%)'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '可为主产品'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '可为联副产品'
        }]
      }]
    }, {
      //column2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '发料控制',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '发料方式'
        }, {
          name: 'specification',
          fieldLabel: '倒冲时机'
        }, {
          name: 'specification',
          fieldLabel: '发料仓库'
        }, {
          name: 'specification',
          fieldLabel: '超发控制方式'
        }, {
          name: 'specification',
          fieldLabel: '最小发料批量'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '是否关键件'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '是否齐套件'
        }]
      }]
    }, {
      //column3
      xtype: FormLayoutPanel,
      columnWidth: .3,
      //默认label宽度
      defaults: {
        layoutConfig: {
          labelWidth: 120
        }
      },
      items: [{
        xtype: FieldSet,
        title: '工艺路线',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '默认工艺路线'
        }, {
          name: 'specification',
          fieldLabel: '标准工时(秒)'
        }, {
          name: 'specification',
          fieldLabel: '标准人员准备工时'
        }, {
          name: 'specification',
          fieldLabel: '标准人员实作工时'
        }, {
          name: 'specification',
          fieldLabel: '标准机器准备工时'
        }, {
          name: 'specification',
          fieldLabel: '标准机器实作工时'
        }]
      }]
    }]
  });

  return ProductionFormPanel;
});