/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Storehouse/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var StorehouseSearchComboBox;

  StorehouseSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'StorehouseSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Storehouse',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return StorehouseSearchComboBox;
})