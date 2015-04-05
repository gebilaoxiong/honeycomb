/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-26 00:54:31
 * @description viewport部分类
 */
define([
  'controls',
  'infrastructure/viewport/LoadViewProxy',
  'infrastructure/route/RouteDataMapper'
], function($, LoadViewProxy, RouteDataMapper) {

  var ViewportPartial,

    redirect = 'redirect',

    viewportIndex = 0;

  ViewportPartial = {

    type: 'XViewport',

    title: '空白页',

    /*视窗ID*/
    viewportID: undefined,

    /*加载view时候遮罩的样式*/
    loadViewMaskCls: 'x-viewport-load-mask',

    /*子模块事件绑定*/
    cmpEvents: {
      'view': {
        'titlechange': 'onViewTitleChange'
      }
    },

    /*初始化加载操作*/
    initLoadOperation: undefined,

    /**
     * 重写初始化
     */
    init: function() {
      var me = this,
        loadOperation;

      //调用基类方法
      me.callParent(arguments);

      if (!me.routeData) {
        throw 'Viewport初始化失败！未传入路由数据';
      }

      me.initRouteDataMapper();
      me.viewportID = viewportID();

      //完成呈现后 加载view
      me.bind('afterrender', function() {
        me.loadView(me.initLoadOperation, me.routeData, me.viewConfig, true);
      }, me, {
        single: true
      });
    },

    /*初始化路由映射对象*/
    initRouteDataMapper: function() {
      var me = this,
        mapperType = me.routeDataMapper,
        cfg = me.routeDataMapperConfig;

      //配置对象
      if (Q.isPlainObject(mapperType)) {
        cfg = mapperType;
        mapperType = mapperType.xtype;
      }

      //默认类型
      if (!Q.isFunction(mapperType)) {
        mapperType = RouteDataMapper;
      }

      me.routeDataMapper = new mapperType(cfg);
    },

    /**
     * 重写初始化组件
     */
    initComponent: function() {
      var me = this;

      me.initMessageBox();
      //初始化加载代理事件句柄
      me.initViewProxyListener();
      me.callParent(arguments);
    },

    /**
     * 重写生成控件
     */
    onRender: function() {
      var me = this;

      me.callParent(arguments);

      me.renderMessageBox();
    },

    /**
     * 重写绘制完成后
     */
    afterRender: function() {
      var me = this;

      me.initItems();
      me.callParent(arguments);
    },

    /**
     * 比较路由数据是否相等
     * @param  {Object}   routeData     路由数据
     */
    compaireRouteData: function(routeData) {
      return Q.Object.equals(this.routeData, routeData);
    },

    /**
     * 销毁消息提示框
     */
    beforeDestroy: function() {
      var me = this;

      if (me.messageBox) {
        me.messageBox.destroy();
      }

      me.routeDataMapper.destroy();
      delete me.routeDataMapper;
      me.callParent(arguments);
    },

    /**
     * View的titlechange事件处理函数
     * @param  {EventObject}    e         事件对象
     * @param  {XView}          view      事件源
     * @param  {string}         title     新的title
     */
    onViewTitleChange: function(e, view, title) {
      this.setTitle(title);
    },

    /**
     * 设置view
     * @param  {object|Component}   newView   新的视图
     */
    setView: function(newView) {
      var me = this,
        view = me.items.get('view');

      //移除旧的
      if (view) {
        me.remove(view);
      }

      newView.alias = 'view';

      newView = me.add(newView);
      me.doLayout();
      me.fire('viewchange', me, newView);
    },

    /**
     * 获取view
     */
    getView: function() {
      return this.items.get('view');
    },

    /**
     * 是否包含view
     */
    containsView: function() {
      return !!this.items.get('view');
    },


    /**
     * 跳转到某一页
     * @param  {Object}       routeData       路由数据
     * @param  {object}       viewConfig      view初始化对象
     * @param  {bool}         clearHistory    是否清空转换历史记录
     */
    redirectTo: function(routeData, viewConfig, clearHistory) {
      this.loadView(redirect, routeData, viewConfig, clearHistory);
    },

    /**
     * 打开新的页面
     * @param  {Object}     routeData         路由数据
     * @param  {object}     viewConfig        view初始化对象
     * @param  {int}        index             新页面的索引
     */
    openPage: function(routeData, viewConfig, index) {
      var navigation = this.getNavigation();
      if (navigation) {
        navigation.navigate(routeData, viewConfig, index);
      }
    },

    /**
     * 在当前页面的后面追加一个新的页面
     * @param  {Object}     routeData         路由数据
     * @param  {object}     viewConfig        view初始化对象
     */
    appendPage: function(routeData, viewConfig) {
      var me = this,
        navigation = me.getNavigation(),
        index;

      if (navigation && (index = navigation.getScriptPageIndex(me)) > -1) { //当前页面索引
        navigation.navigate(routeData, viewConfig, index + 1);
      }
    },

    /**
     * 打开新窗口
     * @param  {Object}     routeData         路由数据
     * @param  {object}     viewConfig        view初始化对象
     */
    openWindow: Q.noop,

    /**
     * 初始化加载代理事件处理
     */
    initViewProxyListener: function() {
      var me = this;

      if (!me.viewProxyListener) {

        me.viewProxyListener = {
          //页面加载前（mask）
          beforeload: me.onBeforeLoadView,
          //加载完成(unmask)
          complete: me.onViewLoadComplete,
          //加载成功
          success: me.onViewLoadSuccess,
          //加载失败
          failure: me.onViewloadFailure,
          //取消加载
          cancel: me.onCancelLoadView,

          scope: me
        };
      }
    },

    getRouteData: function() {
      return this.routeData;
    },

    /**
     * 加载view
     * @param  {string}       operation       操作(redirect||open)
     * @param  {Object}       routeData       路由数据
     * @param  {object}       viewConfig      view初始化对象
     * @param  {bool}         clearHistory    是否清空转换历史记录
     */
    loadView: function(operation, routeData, viewConfig, clearHistory) {
      var me = this;

      if (me.loading || (!routeData || !Q.isObject(routeData)) || !operation) {
        return;
      }

      me.setRouteData(routeData);

      me.createLoadViewProxy(
        operation,
        me.routeDataMapper.map(routeData, clearHistory),
        viewConfig,
        me.viewProxyListener).load();
    },

    /**
     * 设置routeData
     * @param  {Object}       routeData       路由数据
     */
    setRouteData: function(routeData) {
      var me = this,
        old = me.routeData;

      //相同不做处理
      if (Q.Object.equals(routeData, old)) {
        return;
      }

      me.routeData = routeData;
      me.onRouteDataChange(routeData, old);
      me.fire('routedatachange', me, routeData, old);
    },

    /**
     * 获取路由数据
     */
    getRouteData: function() {
      return this.routeData;
    },

    /**
     * 路由数据变更处理函数
     * @param  {Object}       routeData       路由数据
     * @param  {Object}       old             旧的路由数据
     */
    onRouteDataChange: function(routeData, old) {
      var me = this,
        navigation;

      //只处理ScriptPage的该事件
      if (me.isXType('ScriptPage') && (navigation = me.getNavigation())) {
        //提交给导航面板处理
        //在导航面板中判断当前页面是激活页面
        //如果是 替换hash
        navigation.processEvent('ScriptPageRouteDataChange', [me, routeData, old]);
      }
    },

    /**
     * 创建加载View的代理
     * @param  {String} operation     操作类型(openpage,openwindow,redirect)
     * @param  {string} url           请求的URL
     * @param  {Object} config        画框初始化对象
     * @param  {Object} listeners     需要绑定的事件
     */
    createLoadViewProxy: function(operation, url, viewConfig, listerner) {
      return new LoadViewProxy(operation, url, viewConfig, listerner);
    },


    /*-----------------------处理页面加载事件-------------------------*/

    /**
     * view加载前事件处理函数(打开遮罩)
     * @param  {string}         operation     操作(redirect||open)
     * @param  {LoadViewProxy}  loadProxy     加载代理
     * @param  {string}         url           加载路径
     * @param  {object}         viewConfig    view初始化对象
     */
    onBeforeLoadView: function(e, operation, loadProxy, url, viewConfig) {
      var me = this;

      me.setTitle('页面加载中');
      me.showLoadMask();
      me.loading = true; //进入加载状态
    },

    /**
     * view加载完毕事件处理函数(关闭遮罩)
     * @param  {string}         status        加载状态（success||failure）
     * @param  {LoadViewProxy}  loadProxy     加载代理
     * @param  {string}         operation     操作(redirect||open)
     * @param  {string}         url           加载路径
     * @param  {object}         viewConfig    view初始化对象
     */
    onViewLoadComplete: function() {
      var me = this;
      //关闭遮罩
      me.hideLoadMask();
      me.loading = false; //退出加载状态
    },

    /**
     * view加载成功处理函数
     * @param  {LoadViewProxy}  loadProxy     加载代理
     * @param  {string}         operation     操作(redirect||open)
     * @param  {Type}           viewType      请求的view类型
     * @param  {object}         viewConfig    view初始化对象
     */
    onViewLoadSuccess: function(e, loadProxy, operation, viewType, viewConfig) {
      viewConfig = viewConfig || {};
      //我们不在这里实例化viewType加到容器中
      viewConfig.xtype = viewType;

      this.setView(viewConfig);
    },

    /**
     * view加载失败处理函数
     * @param  {ViewLoadException}  $error        错误类型
     * @param  {LoadViewProxy}      loadProxy     加载代理
     * @param  {string}             operation     操作(redirect||open)
     * @param  {string}             url           加载路径
     * @param  {object}             viewConfig    view初始化对象
     */
    onViewloadFailure: function(e, $error, loadProxy, operation, url, viewConfig) {
      var me = this;

      //对话框显示错误信息
      alert('跳转到404')
    },

    /**
     * 取消view加载
     * @param  {LoadViewProxy}    loadProxy     加载代理
     * @param  {string}           operation     操作(redirect||open)
     * @param  {string}           url           加载路径
     * @param  {object}           viewConfig    view初始化对象
     */
    onCancelLoadView: function(e, loadProxy, operation, url, viewConfig) {
      var me = this;

      me.loading = false; //退出加载状态
      me.confirmInfo(
        '确认',
        '是否取消加载页面？',
        confiremCancelLoadCallback,
        loadProxy);
    },

    /**
     * 是否是初始化加载操作
     * 在页面加载失败的时候 判断是应该销毁还是回到加载前的状态
     * @param  {string}           operation     操作
     */
    isInitLoadOperation: function(operation) {
      return operation === this.initLoadOperation;
    },
    /*-----------------------------遮罩--------------------------------*/
    /**
     * 显示载入页面遮罩
     */
    showLoadMask: function() {
      var me = this;
      return me.callParent('mask', [undefined, me.loadViewMaskCls]);
    },

    /**
     * 关闭载入遮罩
     */
    hideLoadMask: function() {
      var me = this;
      return me.callParent('unmask', [undefined, me.loadViewMaskCls]);
    },


    /*-----------------------消息提示----------------------------------*/
    /**
     * 初始化消息提示框
     */
    initMessageBox: function() {
      var me=this;
      me.messageBox = new $.MessageBox(me.messageCfg);
    },

    /**
     * 绘制消息提示框
     */
    renderMessageBox: function() {
      var me = this;

      if (me.messageBox) {
        me.messageBox.render(me.el);
      }
    },

    /**
     * 显示一个消息提示框
     * @param  {Object}   options         选项
     * @param  {string}   messageAlign    消息位置（可选）
     */
    alert: function(options, messageAlign) {
      var me = this,
        container = me.messageCt ? me[me.messageCt] : me.el;

      if (me.messageBox && options) {
        me.messageBox.alert(options, container, messageAlign);
      }
    },

    /**
     * 显示错误信息
     * @param  {String}       title       错误标题
     * @param  {String}       message     错误信息
     * @param  {Function}     callback    回调函数
     * @param  {Object}       scope       回调函数作用域
     
    alertError: function(title, message, callback, scope) {
      this.alert({
        type: 'error',
        title: title,
        modal: true,
        message: message,
        fn: callback,
        closeable: false,
        scope: scope
      });
    },*/

    /*显示一个确认对话框*/
    confirm: function(options, messageAlign) {
      var me = this,
        container = me.messageCt ? me[me.messageCt] : me.el;

      if (me.messageBox && options) {
        me.messageBox.confirm(options, container, messageAlign);
      }
    },
    /*

    confirmError: function(title, message, callback, scope) {
      this.confirm({
        type: 'error',
        title: title,
        message: message,
        fn: callback,
        scope: scope,
        modal: true,
        closeable: false,
        buttons: ['yes', 'no']
      });
    },

    confirmInfo: function(title, message, callback, scope) {
      this.confirm({
        type: 'info',
        title: title,
        message: message,
        fn: callback,
        scope: scope,
        modal: true,
        closeable: false,
        buttons: ['yes', 'no']
      });
    }*/
  };


  /**
   * 询问是否取消加载
   * @param  {String} result 点击的按钮
   */
  function confiremCancelLoadCallback(result) {
    this[result === 'no' ? 'load' : 'cancel']();
  }

  /**
   * 工厂方法 生成viewport的ID
   */
  function viewportID() {
    return (viewportIndex++);
  }

  return ViewportPartial;
});