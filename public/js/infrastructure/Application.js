/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-07 22:56:23
 * @description 应用程序生命周期 抽象
 */

define([
  'controls',
  'infrastructure/route/Router'
], function($, Router) {

  var Application;

  Application = Q.Class.define({

    /*路由器初始化对象*/
    routerConfig: undefined,

    /*路由器*/
    router: undefined,

    /**
     * 重写初始化
     */
    init: function(config) {
      var me = this;

      Q.extend(me, config);

      //初始化路由器
      me.initRouter();

      //注册路由
      me.regiterRoutes(me.router);

      //注册路由器拦截事件
      me.router.bind('intercept', me.onRouterIntercept, me);

      //初始化应用程序容器面板
      me.initAppViewport(me.viewportCfg);

      me.onApplicationStart();

      /*路由器开始工作*/
      me.router.start();
    },

    /*初始化应用程序容器*/
    initAppViewport: function(viewportCfg) {
      var me = this;

      if (!me.viewport) {
        me.viewport = new $.Viewport(viewportCfg);
      }
    },

    /*应用程序开始句柄(此时路由器和应用程序容器已经完成初始化 可以进行一些事件绑定)*/
    onApplicationStart: Q.noop,

    /*初始化路由器*/
    initRouter: function() {
      var me = this,
        router = me.router;

      if (Q.isPlainObject(router)) { //配置对象
        me.routerConfig = router;
        me.router = null;
      }

      if (router == undefined) {
        router = me.defaultRouterType;
      }

      if (Q.isFunction(router)) { //构造函数
        me.router = new router(me.routerConfig);
      }
    },

    /*注册路由*/
    regiterRoutes: Q.noop,

    /**
     * 路由器拦截事件处理函数
     * @param  {event}      e               事件对象
     * @param  {Route}      route           路由
     * @param  {object}     routeData       路由数据
     */
    onRouterIntercept: Q.noop,

    /*导航*/
    routerNavigate: function(routeData, options) {
      var hash;

      hash = this.translateRouteDataToHash(routeData);

      //console
      GLOBAL.logInfo('Router ', (options && options.replace ? '替换' : '推入'), ' hash : ', hash);

      this.router.navigate(hash, options);
    },

    translateRouteDataToHash: Q.noop

  });

  Application.prototype.defaultRouterType = Router;

  return Application;
});