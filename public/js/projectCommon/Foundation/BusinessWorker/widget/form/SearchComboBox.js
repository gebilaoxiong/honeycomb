/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-19 23:44:09
 * @description 组织结构搜索框
 */
define([
  'common/factory/TypeFactory',
  'projectCommon/Foundation/BusinessWorker/data/searchComboStore'
], function(TypeFactory, searchComboStore) {
  var BusinessWorkerSearchComboBox;

  BusinessWorkerSearchComboBox = TypeFactory.create('widget.searchCombo', {
    type: 'BusinessWorkerSearchCombo',

    allowBlank: false,

    routeData: {
      module: 'Foundation',
      part: 'BusinessWorker',
      view: 'List'
    },
    
    store: searchComboStore
  });

  return BusinessWorkerSearchComboBox;
})