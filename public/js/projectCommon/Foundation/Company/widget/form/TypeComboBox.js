/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-27 23:30:36
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Company/data/typeComboStore'
], function(TypeFactory, comboStore) {
  var CompanyTypeComboBox;

  CompanyTypeComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'CompanyTypeCategoryCombo',
    
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

  return CompanyTypeComboBox;
})
