/**
 * 脚本页面
 * 主要事件
 */
define([
  'infrastructure/viewport/AbstractScriptPage',
  'infrastructure/viewport/PageManager',
  'infrastructure/viewport/ScriptWindow'
], function(AbstractScriptPage, PageManager, ScriptWindow) {

  /**
   * 页面
   */
  var ScriptPage;

  ScriptPage = Q.Class.define(AbstractScriptPage, {

    type: 'ScriptPage',

    closable: true,

    layout: 'fit',

    /*disable的时候不显示遮罩*/
    maskDisabled: false,

    baseCls: 'x-page',

    /*默认子控件设置*/
    defaults: {
      border: false
    },

    /*子模块外观设置*/
    cmpDefaults: {
      'view': {
        /*工具栏设定*/
        toolbarSettings: {
          buttonSettings: {
            scale: 'big'
          }
        }
      }
    },

    /*初始化加载操作*/
    initLoadOperation: 'openPage',

    /**
     * 重写初始化组件 将页面注册到PageManger中
     */
    init: function() {
      var me = this;

      me.callParent(arguments);

      //注册页面
      PageManager.register(me);
    },

    /**
     * 重写销毁前
     * 将页面在ScriptManager中反注册
     */
    beforeDestroy: function() {
      var me = this;

      PageManager.unregister(me);
      me.callParent(arguments);
    },

    /**
     * 打开新窗口
     * @param  {ScriptWindow}     windowType        window的类型(可选)
     * @param  {Object}           routeData         路由数据
     * @param  {object}           viewConfig        view初始化对象
     */
    openWindow: function( /*optinal*/ windowType, routeData, viewConfig) {
      var me = this,
        win;

      //整理参数
      if (Q.isObject(windowType)) {
        viewConfig = routeData;
        routeData = windowType;
        windowType = ScriptWindow;
      }

      win = new windowType({
        //路由数据
        routeData: routeData,
        //视图数据
        viewConfig: viewConfig,
        //路由数据Mapper初始化对象
        routeDataMapper: this.initCfg.routeDataMapper
      });
      win.render(this.body);
      win.show();

      return win;
    }
  });

  return ScriptPage;
});