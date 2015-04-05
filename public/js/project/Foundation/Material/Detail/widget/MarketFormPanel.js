/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-11 00:00:54
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

  var MarketFormPanel,
    form = $.form;

  MarketFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialMarketFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      xtype: FieldSet,
      title: '销售',
      columnWidth: .3,
      items: [{
        name: 'specification',
        fieldLabel: '销售单位'
      }, {
        name: 'specification',
        fieldLabel: '销售计价单位'
      }, {
        name: 'specification',
        fieldLabel: '起订量'
      }, {
        name: 'specification',
        fieldLabel: '超发上限(%)'
      }, {
        name: 'specification',
        fieldLabel: '超发下限(%)'
      }, {
        name: 'specification',
        fieldLabel: '代理减价比例'
      }]
    }, {
      xtype: FieldSet,
      title: '销售',
      columnWidth: .3,
      items: [{
        xtype: form.CheckboxGroup,
        name: 'specification',
        columns: 2,
        items: [{
          name: 'specification',
          boxLabel: 'ATP检查'
        }, {
          name: 'specification',
          boxLabel: '允许退货'
        }, {
          name: 'specification',
          boxLabel: '退货检查'
        }, {
          name: 'specification',
          boxLabel: '部件可退'
        }]
      }]
    }, {
      xtype: FieldSet,
      title: '订货平台',
      columnWidth: .3,
      items: [{
        xtype: form.Checkbox,
        name: 'specification',
        boxLabel: '允许发布到订货平台'
      }]
    }]
  })

  return MarketFormPanel;
})