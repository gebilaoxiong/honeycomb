/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-06 13:45:11
 * @description
 */
define([
  'infrastructure/command/CommandManager'
], function(CommandManager) {

  var ViewPartial,

    darkCls = 'x-dark-view';

  ViewPartial = {

    type: 'View',

    baseCls: 'x-view',

    layout: 'fit',

    /*禁用的时候现实遮罩*/
    maskDisabled: true,

    /*是否需要消息提示层*/
    messageBox: true,

    /*处理操作时候遮罩的样式*/
    processMaskCls:'x-viewport-process-mask',

    border: false,

    /*是否为暗色调*/
    dark: false,

    defaults: {
      border: false,
      background: false
    },

    statics: {
      getAlias: function(o) {
        return o.alias;
      }
    },

    /**
     * 初始化消息提示层
     */
    initComponent: function() {
      var me = this;

      me.initWindowCollection();

      me.callParent(arguments);
    },

    /**
     * 获取命令管理器
     */
    getCommandManager: function() {
      var me = this,
        commandManager = me.commandManager;

      if (!commandManager) {
        commandManager = me.commandManager = new CommandManager();
      }

      return commandManager;
    },

    /**
     * 获取操作
     */
    getActions: Q.noop,

    /**
     * 初始化window集合
     */
    initWindowCollection: function() {
      var me = this;

      if (!me.windows) {
        me.windows = new Q.MixCollection(ViewPartial.getAlias);
      }
    },

    afterRender: function() {
      var me = this;

      me.callParent(arguments);

      if (me.dark) {
        me.el.addClass(darkCls);
      }
    },

    /**
     * 重写初始化事件
     */
    initEvents: function() {
      var me = this;

      me.callParent(arguments);

      me.bind('afterlayout', me.firstLayoutComplete, me);
    },

    /**
     * private
     */
    firstLayoutComplete: function() {
      var me = this;
      //解除事件绑定
      //如果未布局完成 不进行任何操作
      me.unbind('afterlayout', me.firstLayoutComplete, me);

      me.onFirstLayoutComplete();

      //触发firstlayoutcomplete事件
      me.fire('firstlayoutcomplete', me);
    },

    /**
     * 销毁
     */
    onDestroy: function() {
      var me = this;

      Q.destroy(me.commandManager, me.viewActions)
      me.callParent(arguments);
    },

    /**
     * private
     * 首次布局完毕
     */
    onFirstLayoutComplete: Q.noop,

    /**
     * 获取路由数据
     */
    getRouteData: callViewportMethodFactory('getRouteData'),

    /**
     * 跳转到某一页
     * @param  {Object}       routeData        路由数据
     * @param  {object}       viewConfig       view初始化对象
     * @param  {bool}         clearHistory     是否清空转换历史记录
     */
    redirectTo: callViewportMethodFactory('redirectTo'),

    /**
     * 打开新的页面
     * @param  {Object}       routeData        路由数据
     * @param  {object}       viewConfig       view初始化对象
     * @param  {int}          index             新页面的索引
     */
    openPage: callViewportMethodFactory('openPage'),

    /**
     * 在当前页面的后面追加一个新的页面
     * @param  {Object}       routeData        路由数据
     * @param  {object}       viewConfig       view初始化对象
     */
    appendPage: callViewportMethodFactory('appendPage'),

    /**
     * 在当前页面中打开一个window
     * @param  {Object}       routeData       路由数据
     * @param  {object}       viewConfig      view初始化对象
     */
    openWindow: callViewportMethodFactory('openWindow'),

    /**
     * 刷新
     */
    reload: Q.noop,


    /**
     * 显示载入页面遮罩
     */
    showProcessMask: function() {
      var me = this;
      return me.callParent('mask', [undefined, me.processMaskCls]);
    },

    /**
     * 关闭载入遮罩
     */
    hideProcessMask: function() {
      var me = this;
      return me.callParent('unmask', [undefined, me.processMaskCls]);
    }
  }



  /**
   * 工厂方法 返回一个调用窗口的方法
   * @param  {String}     method      需要调用的方法名称
   */
  function callViewportMethodFactory(method) {
    return function() {
      var ret;

      ret = this.applyViewport(method, arguments);

      return ret;
    }
  }

  return ViewPartial;
})