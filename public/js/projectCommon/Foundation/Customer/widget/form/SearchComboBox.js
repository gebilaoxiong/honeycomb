/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Customer/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var CustomerSearchComboBox;

  CustomerSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'CustomerSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Customer',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return CustomerSearchComboBox;
})