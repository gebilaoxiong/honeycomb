/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Unit/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var UnitSearchComboBox;

  UnitSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'UnitSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Unit',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return UnitSearchComboBox;
})