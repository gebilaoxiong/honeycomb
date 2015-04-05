/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-07 01:53:25
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Vendor/data/levelComboStore'
], function(TypeFactory, comboStore) {
  var VendorLevelComboBox;
 
  VendorLevelComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'VendorLevelCategoryCombo',
    
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

  return VendorLevelComboBox;
})
