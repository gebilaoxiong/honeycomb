/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-01 01:13:29
 * @description
 */

define([
  'common/builder/GridModuleBuilder',
  'common/widget/store/MemoryJsonStore',
  'common/module/EditorGridModule'
], function(GridPanelBuilder, MemoryJsonStore, EditorGridModule) {

  return GridPanelBuilder.extend('editor', {

    extendType: EditorGridModule,

    storeType: MemoryJsonStore
  });
});