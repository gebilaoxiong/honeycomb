/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Contacter/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var ContacterSearchComboBox;

  ContacterSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'ContacterSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'ContactInfo',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return ContacterSearchComboBox;
})