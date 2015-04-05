/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-01 04:00:11
 * @description 
 */
define([
  'common/builder/ComboBoxBuilder',
  'common/widget/form/SelectComboBox'
], function(ComboBoxBuilder,SelectComboBox) {
  var SelectComboBoxBuilder

  SelectComboBoxBuilder = ComboBoxBuilder.extend('widget.selectCombo', {

    extendType: SelectComboBox
  });

  SelectComboBoxBuilder.ns = 'widget.selectCombo';

  return SelectComboBoxBuilder;
});
