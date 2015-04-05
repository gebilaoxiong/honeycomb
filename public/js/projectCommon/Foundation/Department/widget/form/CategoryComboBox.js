/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-01-05 23:45:01
 * @description
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Department/data/categoryComboStore'
], function(TypeFactory, store) {
  var CategoryComboBox;

  CategoryComboBox =  TypeFactory.create('widget.selectCombo', {
    type: 'DepartmentCategoryCombo',
    
    store: store
  });

  return CategoryComboBox;
})