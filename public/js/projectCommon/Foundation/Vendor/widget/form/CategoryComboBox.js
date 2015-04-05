/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 01:23:56
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Vendor/data/categoryComboStore'
], function(TypeFactory, comboStore) {
  var VendorCategoryComboBox;

  VendorCategoryComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'VendorCategoryCombo',
    
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

  return VendorCategoryComboBox;
})
