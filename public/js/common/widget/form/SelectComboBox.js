/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-01 04:01:19
 * @description 
 */
define([
  'controls',
  'common/widget/form/ComboBox'
], function($,ComboBox) {
  var SelectComboBox;

  SelectComboBox = Q.Class.define(ComboBox, {

    type:'SelectComboBox',

    editable:false
  });

  return SelectComboBox;
})
