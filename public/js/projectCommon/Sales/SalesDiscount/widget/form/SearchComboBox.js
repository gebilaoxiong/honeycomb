/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Sales/SalesDiscount/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var SalesDiscountSearchComboBox;

  SalesDiscountSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'SalesDiscountSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Sales',
      part: 'SalesDiscount',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return SalesDiscountSearchComboBox;
})