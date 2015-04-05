/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/PaymentsType/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var PaymentsTypeSearchComboBox;

  PaymentsTypeSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'PaymentsTypeSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'PaymentsType',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return PaymentsTypeSearchComboBox;
})