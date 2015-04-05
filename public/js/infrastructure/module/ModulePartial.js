/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-23 21:26:57
 * @description 模块部分类
 */
define([
  'controls',
  'infrastructure/module/ModuleListenersCache'
], function($, ModuleListenersCache) {

  var ModulePartial,

    navigationType = 'Navigation',

    scriptPageType = 'ScriptPage',

    windowType = 'Window',

    viewPortType = 'XViewport',

    arrayProto = Array.prototype,

    core_slice = arrayProto.slice,

    core_shift = arrayProto.shift,

    core_concat = arrayProto.concat,

    toolbars = ['tbar', 'fbar', 'bbar'];

  function getAlias(o) {
    return o.alias;
  }

  ModulePartial = {
    /*子模块事件处理*/
    cmpEvents: undefined,

    statics: {
      /*获取别名*/
      getAlias: getAlias
    },

    /*子组件默认属性 名键值*/
    cmpDefaults: undefined,

    /**
     * 重写初始化组件 在组件初始化完毕后初始化监听缓存
     */
    initComponent: function() {
      var me = this,
        listeners, bar, i;

      me.initListenersCache();

      //将初始化中配置的关系编译成listeners后添加到缓存
      //onAdd的时候会自动绑定到控件
      if (me.cmpEvents && (listeners = me.decodeListeners(me.cmpEvents))) {
        me.listenersCache.add(listeners);
      }

      //删除此关系属性
      delete me.cmpEvents;


      /*工具栏重定义*/
      i = 0;
      while (bar = toolbars[i++]) {
        //如果有定义工具栏
        if (me[bar]) {
          me[bar] = me.decodeToolbarConfig(me[bar]);
        }
      }

      me.callParent(arguments);
    },

    /**
     * 重写应用默认配置 加入子控件个性属性配置
     */
    applyDefaults: function(config) {
      var me = this,
        alias = config.alias,
        ret;

      ret = me.callParent(arguments);

      if (!alias || !me.cmpDefaults || !me.cmpDefaults[alias]) {
        return ret;
      }

      return Q.extend(ret, me.cmpDefaults[alias]);
    },

    /**
     * 初始化组件监听缓存
     */
    initListenersCache: function() {
      var me = this;
      if (!me.listenersCache) {
        me.listenersCache = new ModuleListenersCache();
      }
    },
    /**
     * 重写初始化子控件集合
     * 将键值设定为alias
     */
    initItems: function() {
      var me = this;

      if (!me.items) {
        me.items = new Q.MixCollection(getAlias);
        me.getLayout();
      }
    },

    /**
     * 重写获取控件
     * @param  {String} alias 别名或者ID
     */
    getCmp: function(alias) {
      var me = this,
        cmp;

      //如果传入的是个对象 那么我们获取他的别名 并根据别名查找
      if (Q.isObject(alias)) {
        alias = alias.alias;
      }

      cmp = this.callParent(arguments);

      //如果依据别名查找不存在 就根据ID查找
      if (!cmp && Q.isString(alias)) {
        cmp = me.items.getBy(function(_, item) {
          return item.id === alias;
        });
      }

      return cmp;
    },

    /**
     * 绑定子控件事件
     * 1 module.addCmpEvents('grid','rowclick','onGridRowClick')
     *
     * 2 module.addCmpEvents('grid',{
     * 		'rowclick':'onGridRowClick',
     * 		'rowdbclick':me.onGridRowDbClick
     * });
     *
     * 3 module.addCmpEvents({
     * 		'grid1':{
     * 			'rowclick':'onGridRowClick',
     * 		 	'rowdbclick':me.onGridRowDbClick
     *    },
     *     	'grid2':{
     * 			  'rowclick':'onGridRowClick',
     * 		 	'  rowdbclick':me.onGridRowDbClick
     *     	}
     * })
     */
    addCmpEvents: function(alias, eventName, handlerName) {
      var me = this,
        listeners = me.decodeListeners.apply(me, arguments),
        cmp;

      if (listeners) {
        me.listenersCache.add(alias, listeners);

        if (cmp = me.items.get(alias)) {
          cmp.bind(listeners);
        }
      }
    },


    /**
     * 将参数编译成Listeners的格式
     * @param  {String} alias       别名
     * @param  {String} eventName   事件名称
     * @param  {String} handlerName 处理函数名称
     */
    decodeListeners: function(alias, eventName, handlerName) {
      var me = this,
        cmp, event, listeners, handler, ret;

      //第三种绑定方法处理
      if (Q.isObject(alias)) {
        listeners = {};

        for (cmp in alias) {
          if (ret = arguments.callee.call(me, cmp, alias[cmp])) {
            listeners[cmp] = ret;
          }
        }
        return listeners;
      }

      //如果是第1种2B绑定法 转为一个对象
      if (Q.isString(eventName)) {

        listeners = {};
        listeners[eventName] = handlerName;

      } else if (typeof eventName === 'object') { //第2种绑定方法
        //浅度复制事件对象
        listeners = Q.extend({}, eventName);
      }


      //最后 不符合规定的绑定方法都跪了
      if (listeners) {
        for (event in listeners) {
          handler = listeners[event];

          //如果处理函数为字符串 则为模块的处理函数名称
          if (Q.isString(handler)) {

            if (!me[handler]) {
              throw '模块中的处理函数不存在！';
            }

            listeners[event] = handler = me[handler];
          }

          //处理函数不存在 本次绑定无意义
          if (!handler) {
            delete listeners[event];
          }

        }

        listeners.scope = me;
        return listeners;
      }
    },

    /**
     * 在子控件移除的时候我们移除通过模块绑定在其之上的事件
     * @param  {Component} cmp  组件
     */
    onRemove: function(cmp) {
      var me = this;

      me.callParent(arguments);

      me.listenersCache.unbind(cmp);
    },

    /**
     * 在添加子控件的时候我们从监听缓存中恢复之前绑定的事件
     * @param  {Component} cmp  组件
     */
    onAdd: function(cmp) {
      var me = this;

      me.callParent(arguments);

      me.listenersCache.bind(cmp);
    },

    /**
     * 重写Observable的relayEvents 将其通过addCmpEvents注册
     * @param  {Component|alias} alias 事件源控件
     * @param  {String[]} events 需要转播的事件名称
     */
    relayEvents: function(alias, events) {
      var me = this,
        listeners, i, eventName;

      if (Q.isObject(alias)) {
        alias = alias.alias;
      }

      /*如果没有事件源控件直接返回*/
      if (!alias) {
        return;
      }

      listeners = {}
      i = 0;

      while (eventName = events[i++]) {
        listeners[eventName] = me.createRelayEventHandler(eventName, me);
      }

      me.addCmpEvents(alias, listeners);
    },

    /**
     * 创建转播事件回调函数
     * @param  {String} event 事件名称
     * @param  {Component} sender 事件源控件
     */
    createRelayEventHandler: function(event, sender) {
      return function() {
        core_shift.call(arguments); //去掉eventObject
        return sender.fire.apply(sender, core_concat.apply([event], arguments));
      }
    },

    /**
     * 生成工具栏配置
     * @param  {Object[]} btnArray  按钮数组
     */
    decodeToolbarConfig: function(btnArray) {
      var me = this,
        ret = [],
        i = 0,
        btn;

      while (btn = btnArray[i++]) {
        ret.push(typeof btn === 'string' ?
          btn : {
            text: btn.text,
            scope: me,
            menu: btn.menu,
            handler: typeof btn.handler == 'string' ?
              me[btn.handler] : btn.handler
          });
      }

      return ret;
    },

    /**
     * 重写onDestroy 此时所有子控件均被销毁 我们只需要启动事件监听的销毁程序
     * @return {[type]} [description]
     */
    onDestroy: function() {
      var me = this;

      //销毁缓存
      me.listenersCache.destroy();
      delete me.listenersCache;

      me.callParent(arguments);
    },

    /*-----------------------------打开窗口--------------------------------*/
    /**
     * 打开一个新的窗口
     * @param  {Object}     routeData         路由数据
     * @param  {object}     viewConfig        view初始化对象
     */
    openWindow: Q.noop,

    /**
     * 按结构树向下查找组件
     * @param  {String}     alias             需要查找组件的别名
     */
    findeByAlias: function(alias) {
      var ret = null,
        me = this;

      me.cascade(function(cmp) {
        if (me != cmp && cmp.alias === alias) {
          ret = cmp;
          return false;
        }
      });
      return ret;
    }
  };


  /*--------------------向上查找--------------------*/

  /**
   * 判断控件是否是导航面板
   */
  function isNavigation(cmp) {
    return cmp.isXType(navigationType);
  }

  /**
   * 判断控件是否是视窗容器
   */
  function isViewport(cmp) {
    return cmp.isXType(viewPortType);
  }


  /**
   * 判断控件是否是ScriptPage
   */
  function isScriptPage(cmp) {
    return cmp.isXType(scriptPageType);
  }

  /**
   * 判断控件是否是Window
   */
  function isWindow(cmp) {
    return cmp.isXType(windowType);
  }

  /**
   * 沿着控件结构向上找到Navigation
   */
  function getNavigation() {
    var me = this,
      ret;

    if (!(ret = me.isXType(navigationType))) {
      ret = me.findParentBy(isNavigation);
    }

    return ret;
  }

  /**
   * 沿着控件结构向上找到viewport
   */
  function getViewport() {
    var me = this,
      ret;

    if (!(ret = me.isXType(viewPortType))) {
      ret = me.findParentBy(isViewport);
    }

    return ret;
  }

  /**
   * 沿着控件结构向上找到scriptpage
   */
  function getScriptPage() {
    var me = this,
      ret;

    if (!(ret = me.isXType(scriptPageType))) {
      ret = me.findParentBy(isScriptPage);
    }

    return ret;
  }


  /**
   * 向上调用viewport视窗的方法
   * @param  {string}         methodName      方法名称
   */
  function callViewport(methodName) {
      var me = this,
        params = core_slice.call(arguments, 1),
        viewport, ret;

      if ((viewport = me.getViewport()) && viewport[methodName]) {
        ret = viewport[methodName].apply(viewport, params);
      }

      return ret;
    }
    /**
     * 向上调用viewport视窗的方法
     * @param  {string}         methodName      方法名称
     * @param  {array}          paramArray      参数数组
     */
  function applyViewport(methodName, paramArray) {
    var me = this,
      viewport, ret;

    if ((viewport = me.getViewport()) && viewport[methodName]) {
      ret = viewport[methodName].apply(viewport, paramArray || []);
    }

    return ret;
  }

  /**
   * 向上调用navigation导航面板的方法
   * @param  {string}         methodName      方法名称
   */
  function callNavigation(methodName) {
    var me = this,
      params = core_slice.call(arguments, 1),
      navigation, ret;

    if ((navigation = me.getNavigation()) && navigation[methodName]) {
      ret = navigation[methodName].apply(navigation, params);
    }

    return ret;
  }

  /**
   * 向上调用navigation导航面板的方法
   * @param  {string}         methodName      方法名称
   * @param  {array}          paramArray      参数数组
   */
  function applyNavigation(methodName, paramArray) {
    var me = this,
      navigation, ret;

    if ((navigation = me.getNavigation()) && navigation[methodName]) {
      ret = navigation[methodName].apply(navigation, paramArray || []);
    }

    return ret;
  }

  Q.extend($.Component.prototype, {
    getNavigation: getNavigation,
    getViewport: getViewport,
    getScriptPage: getScriptPage,
    callNavigation: callNavigation,
    applyNavigation: applyNavigation,
    callViewport: callViewport,
    applyViewport: applyViewport
  });

  return ModulePartial;
});