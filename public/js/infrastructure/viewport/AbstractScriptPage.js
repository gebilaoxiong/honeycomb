/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-26 17:18:31
 * @description 抽象脚本页面，主要是为了合并ViewportPartial
 */
define([
  'infrastructure/module/PanelModule',
  'infrastructure/viewport/ViewportPartial'
], function(PanelModule, ViewportPartial) {

  return Q.Class.define(PanelModule, ViewportPartial);
});