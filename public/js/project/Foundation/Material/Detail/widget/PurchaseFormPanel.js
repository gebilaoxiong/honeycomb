/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-14 13:47:05
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet'
], function($, FormLayoutPanel, FieldSet) {

  var PurchaseFormPanel, form;

  form = $.form;

  PurchaseFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialPurchaseFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      //colum1
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '采购',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '采购单位'
        }, {
          name: 'specification',
          fieldLabel: '采购计价单位'
        }, {
          name: 'specification',
          fieldLabel: '采购组'
        }, {
          name: 'specification',
          fieldLabel: '采购员'
        }, {
          name: 'specification',
          fieldLabel: '默认供应商'
        }, {
          name: 'specification',
          fieldLabel: '费用项目'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '费用项目'
        }, {
          name: 'specification',
          fieldLabel: '配额方式'
        }, {
          name: 'specification',
          fieldLabel: '最小拆分数量'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '是否VMI业务'
        }]
      }]
    }, {
      //colum2
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '采购控制',
        autoWidth: true,
        layoutConfig: {
          labelWidth: 110
        },
        items: [{
          xtype: form.CheckboxGroup,
          columns: 2,
          items: [{
            name: 'specification',
            boxLabel: '需要请购'
          }, {
            name: 'specification',
            boxLabel: '货源控制'
          }]
        }, {
          name: 'specification',
          fieldLabel: '收货上限比例(%)'
        }, {
          name: 'specification',
          fieldLabel: '收货下限比例(%)'
        }, {
          name: 'specification',
          fieldLabel: '收货提前天数'
        }, {
          name: 'specification',
          fieldLabel: '收货延迟天数'
        }]
      }]
    }, {
      //colum3
      xtype: FormLayoutPanel,
      columnWidth: .3,
      defaults: {
        layoutConfig: {
          labelWidth: 130
        }
      },
      items: [{
        xtype: FieldSet,
        autoWidth: true,
        title: '委外',
        items: [{
          name: 'specification',
          fieldLabel: '委外单位'
        }, {
          name: 'specification',
          fieldLabel: '委外计价单位'
        }]
      }, {
        xtype: FieldSet,
        autoWidth: true,
        title: '其他',
        items: [{
          name: 'specification',
          fieldLabel: '代理采购加成比例(%)'
        }]
      }]
    }]
  });

  return PurchaseFormPanel;
})