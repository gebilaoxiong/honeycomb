/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Customer/data/categoryComboStore'
], function(TypeFactory, categoryComboStore) {
  var CustomerCategoryComboBox;

  CustomerCategoryComboBox = TypeFactory.create('widget.selectCombo', {
    type: 'CustomerCategoryCombo',

    store: categoryComboStore
  });

  return CustomerCategoryComboBox;
})