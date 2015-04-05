/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-09 22:00:29
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet',
  'projectCommon/Foundation/InventoryCategory/widget/form/SearchComboBox',
  'projectCommon/Foundation/MaterialAttribute/widget/form/ComboBox',
  'projectCommon/Foundation/TaxClassifications/widget/form/ComboBox',
  'projectCommon/Foundation/TaxRate/widget/form/SearchComboBox',
  'projectCommon/Foundation/Unit/widget/form/SearchComboBox'
], function(
  $,
  FormLayoutPanel,
  FieldSet,
  InventoryCategorySearchComboBox,
  MaterialAttributeComboBox,
  TaxClassificationsComboBox,
  TaxRateSearchComboBox,
  UnitSearchComboBox
) {

  var DetailInfoFormPanel,
    form = $.form;

  DetailInfoFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialDetailInfoFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      xtype: FieldSet,
      columnWidth: .3,
      title: '基本信息',
      items: [{
        name: 'specification',
        fieldLabel: '规格型号'
      }, {
        name: 'specification',
        fieldLabel: '助记码'
      }, {
        name: 'specification',
        fieldLabel: '旧物料编码'
      }, {
        xtype: form.TextArea,
        name: 'specification',
        fieldLabel: '描述'
      }, {
        name: 'specification',
        fieldLabel: '物料分组'
      }, {
        xtype: MaterialAttributeComboBox,
        name: 'specification',
        fieldLabel: '物料属性'
      }, {
        xtype: InventoryCategorySearchComboBox,
        name: 'specification',
        fieldLabel: '存货类别'
      }, {
        xtype: TaxClassificationsComboBox,
        name: 'specification',
        fieldLabel: '税分类'
      }, {
        xtype: TaxRateSearchComboBox,
        name: 'specification',
        fieldLabel: '默认税率'
      }, {
        xtype: UnitSearchComboBox,
        name: 'specification',
        fieldLabel: '基本单位'
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '控制',
        autoWidth: true,
        items: [{
          xtype: form.CheckboxGroup,
          name: 'specification',
          columns: 2,
          items: [{
            boxLabel: '允许采购',
            name: 'specification'
          }, {
            boxLabel: '允许销售',
            name: 'specification'
          }, {
            boxLabel: '允许库存',
            name: 'specification'
          }, {
            boxLabel: '允许生产',
            name: 'specification'
          }, {
            boxLabel: '允许委外',
            name: 'specification'
          }, {
            boxLabel: '允许资产',
            name: 'specification'
          }]
        }]
      }]
    }]
  })

  return DetailInfoFormPanel;
})