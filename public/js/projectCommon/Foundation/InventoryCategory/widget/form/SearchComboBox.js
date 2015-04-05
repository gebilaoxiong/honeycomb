/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/InventoryCategory/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var InventoryCategorySearchComboBox;

  InventoryCategorySearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'InventoryCategorySearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'InventoryCategory',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return InventoryCategorySearchComboBox;
})