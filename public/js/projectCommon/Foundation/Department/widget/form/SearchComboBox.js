/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Department/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var DepartmentSearchComboBox;

  DepartmentSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'DepartmentSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Department',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return DepartmentSearchComboBox;
})