/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Country/data/comboStore'
], function(TypeFactory, comboStore) {
  var CountryComboBox;

  CountryComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'CountryCombo',
    
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

  return CountryComboBox;
})