/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/TaxCategory/data/comboStore'
], function(TypeFactory, comboStore) {
  var TaxCategoryComboBox;

  TaxCategoryComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'TaxCategoryCombo',
    
    store: comboStore,

    displayField: 'name',

    recordTypeName:'CommonComboBoxRecordType2',

    recordProperties: [{
      name: 'id',
      mapping: 'id',
      type: 'string'
    }, {
      name: 'name',
      mapping: 'name',
      type: 'string'
    }],
  });

  return TaxCategoryComboBox;
})