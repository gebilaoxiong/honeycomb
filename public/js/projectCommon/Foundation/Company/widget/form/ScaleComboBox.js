/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:38:38
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Company/data/scaleComboStore'
], function(TypeFactory, comboStore) {
  var CompanyScaleComboBox;

  CompanyScaleComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'CompanyScaleCombo',
    
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

  return CompanyScaleComboBox;
})
