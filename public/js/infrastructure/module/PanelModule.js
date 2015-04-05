/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-25 13:15:43
 * @description Panel模块
 */
define(['controls', 'infrastructure/module/ModulePartial'], function($, ModulePartial) {
  return Q.Class.define($.Panel, ModulePartial, {
    type: 'PanelModule',

    defaults: {
      border: false
    }
  });
})