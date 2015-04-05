/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/BusinessGroup/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var BusinessGroupSearchComboBox;

  BusinessGroupSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'BusinessGroupSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'BusinessGroup',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return BusinessGroupSearchComboBox;
})