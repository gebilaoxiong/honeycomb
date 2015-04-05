/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Vendor/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var VendorSearchComboBox;

  VendorSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'VendorSearchCombo',

    routeData: {
      module: 'Foundation',
      part: 'Vendor',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return VendorSearchComboBox;
})