/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-13 13:05:46
 * @description 窗体模块
 */
define(['controls', 'infrastructure/module/ModulePartial'], function($, ModulePartial) {
  
  return Q.Class.define($.Window, ModulePartial, {

    type: 'WindowModule'
  });

});