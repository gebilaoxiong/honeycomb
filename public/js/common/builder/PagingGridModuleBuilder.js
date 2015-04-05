/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-03-24 20:27:38
 * @description
 */

define([
  'common/builder/GridModuleBuilder',
  'common/widget/store/HttpJsonStore',
  'common/module/CheckboxPagingGridModule'
], function(GridPanelBuilder, HttpJsonStore, CheckboxPagingGridModule) {

  return GridPanelBuilder.extend('Paging', {

    extendType: CheckboxPagingGridModule,

    storeType: HttpJsonStore
  });
});