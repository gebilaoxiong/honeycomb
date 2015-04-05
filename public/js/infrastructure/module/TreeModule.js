/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-17 22:04:46
 * @description
 */
define(['controls', 'infrastructure/module/ModulePartial'], function($, ModulePartial) {
  return Q.Class.define($.tree.Panel, ModulePartial, {

    type: 'TreeModule',

    background: false,

    useArrows: true
  });
});