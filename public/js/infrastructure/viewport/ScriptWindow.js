/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-13 12:32:45
 * @description 窗口
 */
define([
  'infrastructure/viewport/AbstractScriptWindow'
], function(AbstractScriptWindow) {

  var ScriptWindow;

  ScriptWindow = Q.Class.define(AbstractScriptWindow, {

    type: 'ScriptWindow',

    width: 900,

    height: 500,

    /*允许最大化*/
    maximizable: true,

    constrainHeader: true,

    /*关闭操作销毁*/
    closeAction: 'destroy',

    /*初始化加载操作*/
    initLoadOperation: 'openWindow',

    /*布局*/
    layout: 'fit',

    defaults: {
      header: false
    },

    messageCfg: {
      miniTop: 45
    },

    messageCt:'bwrap'
  });

  return ScriptWindow;
})