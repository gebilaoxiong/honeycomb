/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/TaxRate/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var TaxRateSearchComboBox;

  TaxRateSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'TaxRateSearchCombo',

    routeData: {
      module: 'Foundation',
      part: 'TaxRate',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return TaxRateSearchComboBox;
})