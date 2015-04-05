/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/ReceiptCondition/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var ReceiptConditionSearchComboBox;

  ReceiptConditionSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'ReceiptConditionSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'ReceiptCondition',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return ReceiptConditionSearchComboBox;
})