/**
 * @authors 熊洋 (xywindows@gmail.com)
 * @description Honeycomb 蜂巢启动文件
 */
! function() {

  /*
        配置require.js
    */
  requirejs.config({

    baseUrl: '/js',

    //enforceDefine: true,

    paths: {
      /*控件库*/
      'controls': 'libs/controls.min',
      /*基础设施*/
      'infrastructure': 'infrastructure',
      /*通用*/
      'common': 'common',
      /*工具类*/
      'util': 'util',
      /**
       *
       * 页面结构
       * Navigation(导航面板)                 =>
       * Viewport(ScriptPage||Window)         =>
       * View(视图)                           =>
       * Module(模块)                         =>
       * Widget(控件)
       */
      'project': 'project',
      /*项目通用*/
      'projectCommon':'projectCommon'
    },

    shim: {
      'application': ['libs/queen'],
      'controls': ['libs/queen']
    },

    urlArgs: "_bust_=" + (new Date().valueOf())
  });

  define(['libs/queen'], function(Q) {

    /*占位图片*/
    Q.BLANK_ICON = 'style/images/cleardot.gif';

    //启动
    Q.ready(function() {
      require(['application']);
      //require(['test/remoteProvider'])
    });
  });

}();