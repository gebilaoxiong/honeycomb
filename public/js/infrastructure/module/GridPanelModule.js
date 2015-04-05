/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-25 23:17:55
 * @description 表格模块
 */
define([
  'controls',
  'infrastructure/module/ModulePartial',
  'infrastructure/module/GridModulePartial'
], function($, ModulePartial, GridModulePartial) {
  return Q.Class.define($.grid.Panel, ModulePartial, GridModulePartial, {
    type: 'GridPanelModule'
  });
})