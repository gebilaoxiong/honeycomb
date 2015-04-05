/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Currency/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var CurrencySearchComboBox;

  CurrencySearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'CurrencySearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Currency',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return CurrencySearchComboBox;
})