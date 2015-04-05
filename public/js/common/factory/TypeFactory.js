/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-26 21:47:16
 * @description 类型定义工厂(单例模式)
 *              负责调用建造者 建造一系列类型
 */
define([
  'infrastructure/factory/TypeFactory',
  /*----------------------widget-------------------*/
  //ListView
  'common/builder/ListViewBuilder',
  //SelectComboBox
  'common/builder/SelectComboBoxBuilder',
  //SearchComboBoxBuilder
  'common/builder/SearchComboBoxBuilder',
  /*----------------------module-------------------*/
  //表单模块
  'common/builder/FormModuleBuilder',
  //过滤面板模块
  'common/builder/FilterModuleBuilder',
  //带有分页工具栏的表格模块
  'common/builder/PagingGridModuleBuilder',
  //可编辑的表格模块
  'common/builder/EditorGridModuleBuilder'
], function() {

  var TypeFactory = Array.prototype.shift.call(arguments);
 
  return new TypeFactory(arguments);
});