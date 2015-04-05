/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-16 01:28:58
 * @description  视图
 */
define([
  'infrastructure/view/ViewPartial',
  'infrastructure/module/PanelModule'
], function(ViewPartial,PanelModule) {

  return Q.Class.define(PanelModule, ViewPartial);
});