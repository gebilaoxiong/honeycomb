/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Industry/data/comboStore'
], function(TypeFactory, comboStore) {
  var IndustryComboBox;

  IndustryComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'IndustryCombo',
    
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

  return IndustryComboBox;
})