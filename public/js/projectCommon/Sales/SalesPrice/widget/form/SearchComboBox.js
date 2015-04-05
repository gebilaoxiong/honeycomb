/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Sales/SalesPrice/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var SalesPriceSearchComboBox;

  SalesPriceSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'SalesPriceSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Sales',
      part: 'SalesPrice',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return SalesPriceSearchComboBox;
})