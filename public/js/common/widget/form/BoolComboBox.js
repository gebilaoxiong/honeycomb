/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-17 21:27:58
 * @description 布尔值的comboBox
 */

define(['controls'], function($) {
  var BoolComboBox, valueField, displayField;

  valueField = 'value';
  displayField = 'text';

  BoolComboBox = Q.Class.define($.form.ComboBox, {

    type: 'BoolComboBox',

    /*不允许编辑*/
    editable: false,

    /*本地数据*/
    mode: 'local',

    /*点击下拉按钮列出所有数据*/
    triggerAction: 'all',

    /*值属性字段*/
    valueField: valueField,

    /*显示文本字段*/
    displayField: displayField,

    /*值*/
    value: false,

    /*store配置*/
    store: {
      xtype: $.data.store.Json,
      idProperty: valueField,
      autoDestroy: true,
      fields: [
        valueField,
        displayField
      ],
      data: [{
        value: false,
        text: '否'
      }, {
        value: true,
        text: '是'
      }]
    }
  });

  return BoolComboBox;
});