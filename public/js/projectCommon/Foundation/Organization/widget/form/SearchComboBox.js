/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Organization/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var OrganizationSearchComboBox;

  OrganizationSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'OrganizationSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Organization',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return OrganizationSearchComboBox;
})