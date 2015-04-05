/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-05 15:47:17
 * @description 路由器
 */
define([
  'controls',
  'infrastructure/route/Route',
  'infrastructure/route/History'
], function($, Route, History) {

  var Router;

  Router = Q.Class.define($.util.Observable, {

    /*是否完成启动*/
    started: false,
    /**
     * 静态方法
     */
    statics: {
      getRouteName: function(o) {
        return o.name;
      }
    },

    /**
     * 初始化
     */
    init: function(config) {
      var me = this,
        routes, route, i;

      Q.extend(me, config);

      if (me.routes) {
        routes = me.routes;
        me.routes = null;
      }

      me.initRoutes();

      //注册初始化中的路由
      if (routes) {
        i = 0;
        while (route = routes[i++]) {
          me.register(route);
        }
      }

      me.initHistory();

      //绑定事件
      me.callParent(arguments);

    },

    /**
     * 初始化路由集合
     */
    initRoutes: function() {
      var me = this;

      if (!me.route) {
        me.routes = new Q.MixCollection(Router.getRouteName);
      }
    },

    /**
     * 注册一个路由
     * @param  {string||Route} 		name  		路由名称
     * @param  {String} 			url 		匹配路径
     * @param  {Object} 			options 	路由选项
     *
     * 1.
     * register('default','{#namespace}/{controller}/{action}/{.id}',{
     * 		//默认值
     * 		defaults:{
     * 			controller:'Home',
     * 			action:'Index'
     * 		},
     * 		//正则限制
     * 		constraints:{
     * 			controller:'[a-z]'
     * 		},
     * 		namespace:'test'
     * });
     *
     * 2.添加Route配置对象
     * register({
     * 		name:'default',
     * 		url:'{#namespace}/{controller}/{action}/{.id}',
     * 		defaults:{
     * 			controller:'Home'
     * 		},
     * 		constraints:{
     * 			controller:'[a-z]'
     * 		},
     * 		namespace:'test'
     * });
     *
     * 3.添加Route实例
     * register(new Route({
     * 		name:'default',
     * 		url:'{#namespace}/{controller}/{action}/{.id}',
     * 		defaults:{
     * 			controller:'Home'
     * 		},
     * 		constraints:{
     * 			controller:'[a-z]'
     * 		},
     * 		namespace:'test'
     * }));
     */
    register: function(name, url, /*optional*/ options) {
      var me = this,
        route;

      if (Q.isString(name)) { //方法一绑定
        route = options || {};
        route.name = name;
        route.url = url;
      } else {
        route = name;
      }

      //未传入符合要求的route
      if (!Q.isDefined(route)) {
        return;
      }

      //route为配置对象
      if (!route.recognize) {
        route = new Route(route);
      }

      //如果路由名称已存在 触发异常
      if (me.routes.contains(route.name)) {
        throw '路由：' + route.name + '已被注册！';
      }

      //新加入的路由 优先级最高
      me.routes.insert(0, route);
    },

    /*初始化History*/
    initHistory: function() {
      var me = this;

      me.history = new History({
        listeners: {
          hashchange: me.onHistoryHashChange,
          scope: me
        }
      });
    },

    /*配置完成 启动路由*/
    start: function() {
      var me = this;

      if (!me.started) {
        //初始化history
        me.history.start();

        me.started = true;
      }
    },

    /**
     * 将传入的url进行识别
     * @param  {String} 	url 	URL
     */
    recognize: function(url) {
      var args, route;

      this.routes.each(function() {
        //如果有路由能够匹配
        if (args = this.recognize(url)) {
          route = this;
          return false;
        }
      });

      //如果没有返回值 那么视作未被识别
      return args ? {
        route: route,
        args: args
      } : null;
    },

    /**
     * history的hashchange事件处理函数
     * @param  {EventObject} 	e    		事件对象
     * @param  {String}		 	hash 		hash值
     */
    onHistoryHashChange: function(e, hash) {
      var me = this,
        urlInfo;
      //如果路由能够识别hash则触发intercept事件
      if (urlInfo = me.recognize(hash)) {
        me.fire('intercept', urlInfo.route, urlInfo.args)
      }
    },

    /**
     * 导航到某一页
     */
    navigate: function() {
      var me = this;

      if (me.history) {
        me.history.navigate.apply(me.history, arguments);
      }
    },

    /**
     * 销毁
     */
    destroy: function() {
      var me = this;

      me.history.destroy();
      me.routes.clear();

      delete me.history;
      delete me.routes;
      me.callParent(arguments);
    }
  });

  return Router;
});