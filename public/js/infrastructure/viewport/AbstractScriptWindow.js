/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-13 12:59:42
 * @description 抽象脚本窗口，主要是为了合并ViewportPartial
 */
define([
  'infrastructure/module/WindowModule',
  'infrastructure/viewport/ViewportPartial'
], function(WindowModule, ViewportPartial) {
  return Q.Class.define(WindowModule, ViewportPartial);
})