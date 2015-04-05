/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/Post/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var PostSearchComboBox;

  PostSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'PostSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'Post',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return PostSearchComboBox;
})