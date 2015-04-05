/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-25 23:11:51
 * @description
 */
define([
  'controls',
  'infrastructure/Application',
  'infrastructure/Navigation'
], function($, Application, Navigation) {
  var application,

    sprit = '/',

    empty = '';

  application = new Application({

    /*--------------------应用程序容器viewport配置对象-----------------------*/
    viewportCfg: {

      /*子控件:导航面板*/
      items: {

        xtype: Navigation,

        /*路径映射配置*/
        routeDataMapper: {
          dir: 'project', //文件夹路径
          format: '{module}/{part}/{view}/View'
        },

        /*菜单路由数据*/
        menuRouteData: {
          module: 'Default',
          part: 'Menu',
          view: 'Index'
        }
      }
    },

    /*-------------------------应用程序开始句柄-----------------------------*/
    onApplicationStart: function() {
      var me = this,
        navigation, stateProvider, defaultPage;

      /*初始化快捷提示*/
      $.QuickTips.init();

      /*需修正
      //将记录模式的存储方式设置为cookie
      stateProvider=new $.state.CookieProvider();
      $.state.Manager.setProvider(stateProvider);
      */


      //绑定navigation的事件
      navigation = getNavigation(me);

      navigation.bind({
        //选项卡切换事件
        tabchange: me.onNavigationTabChange,
        //激活页面routeData变更事件
        activepageroutedatachange: me.onActivePageRouteDataChange,
        //作用域
        scope: me
      });

      //打开默认页面
      defaultPage = navigation.addScriptPage({
        module: 'Default',
        part: 'Home',
        view: 'Index'
      });

      //此时页面并未加载
      //设置title
      defaultPage.setTitle('Begin');
    },

    /*----------------------------注册路由----------------------------------*/
    regiterRoutes: function(router) {

      /*默认路径*/
      router.register('homeRoute', empty, {
        defaults: {
          module: 'Default',
          part: 'Home',
          view: 'Index'
        }
      });

      //列表视图
      //module模块名称 part页面名称 view视窗名称
      router.register('ListViewRoute', '/{module}/{part}/{.view}', {
        //默认值
        defaults: {
          view: 'List'
        }
      });

      //明细视图 新建模式
      router.register('DetailViewCreateRoute', '/{module}/{part}/{verb}', {
        defaults: {
          view: 'Detail'
        },
        //规则限制
        constraints: {
          verb: 'Create'
        }
      });

      //明细视图 编辑模式
      router.register('DetailViewModifyRoute', '/{module}/{part}/{verb}/{id}', {
        defaults: {
          view: 'Detail'
        },
        //规则限制
        constraints: {
          id: '[0-9]*',
          verb: 'Edit'
        }
      });
    },

    /*----------------------------路由器URL拦截事件处理--------------------*/
    /**
     * 路由器拦截事件处理函数
     * @param  {event}      e               事件对象
     * @param  {Route}      route           路由
     * @param  {object}     routeData       路由数据
     */
    onRouterIntercept: function(e, route, routeData) {
      var navigation;

      GLOBAL.logInfo('Router 拦截事件处理函数 ( hash => routeData ): ',
        '路由:', route.name,
        ' 模块:', routeData.module,
        ' 页面:', routeData.part,
        ' 视图:', routeData.view);

      if (navigation = getNavigation(this)) {
        navigation.navigate(routeData);
      }
    },

    /*---------------------routeData->hash转换------------------*/
    translateRouteDataToHash: function(routeData) {
      var hash = [
        sprit, routeData.module,
        sprit, routeData.part,
        sprit
      ];

      //detailView
      if ('verb' in routeData) {
        hash.push(routeData.verb);

        if ('id' in routeData) {
          hash.push(sprit, routeData.id);
        }
      } else {
        hash.push(routeData.view);
      }

      return hash.join(empty);
    },

    /*选项卡切换事件处理函数*/
    onNavigationTabChange: function(e, navigation, scriptPage) {
      if (!scriptPage) {
        return;
      }

      //选项卡切换的时候需要让history产生历史记录
      this.routerNavigate(scriptPage.getRouteData(), {
        silent: true //不触发路由器的拦截事件 
      });
    },

    /*激活页面路由数据变更处理函数*/
    onActivePageRouteDataChange: function(e, navigation, scriptPage, routeData) {
      //激活页面的跳转需要替换当前历史记录
      this.routerNavigate(routeData, {
        silent: true, //不触发路由器的拦截事件 
        replace: true //替换操作 不会产生浏览器历史
      });
    }
  });

  /*获取导航面板*/
  function getNavigation(app) {
    var viewport = app.viewport;

    if (viewport && viewport.rendered) {
      return viewport.items.get(0);
    }
  }

  return application;
})