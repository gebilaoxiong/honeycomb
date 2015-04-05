/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-25 23:10:51
 * @description 导航
 */
define([
  'controls',
  'infrastructure/viewport/ScriptPage',
  'infrastructure/viewport/PageManager'
], function($, ScriptPage, PageManager) {

  /**
   * 导航面板
   */
  var Navigation;

  Navigation = Q.Class.define($.TabPanel, {

    type: 'Navigation',

    baseCls: 'x-nav-panel',

    menuBtnOffsets: [0, 0],

    activeTab: 0,

    enableTabScroll: true,

    /**
     * 重写初始化组件
     */
    initComponent: function() {
      var me = this;

      me.callParent(arguments);

      //将默认类型更改为ScriptPage
      me.defaultType = ScriptPage;
    },

    /**
     * 导航到一个页面
     * @param  {Object} 	routeData   	路由数据
     * @param  {Object} 	viewConfig 		view初始化对象
     * @param  {int}      index         页面的索引
     */
    navigate: function(routeData, viewConfig, /*optinal*/ index) {
      var me = this,
        scriptPage,
        lastIndex;

      //空的路由数据 不做任何处理
      if (!Q.isObject(routeData) || Q.isEmptyObject(routeData)) {
        return;
      }

      if (!(scriptPage = me.getPageByRouteData(routeData))) {
        //页面不存在 添加
        scriptPage = me.addScriptPage(routeData, viewConfig, index);

      } else if (index != undefined) {
        //前任索引
        lastIndex = me.getScriptPageIndex(scriptPage);
        //如果前任索引小于新的索引
        //需要把新的索引减去1
        index = lastIndex < index ? index-- : index;

        //页面存在 移动到索引位置
        scriptPage = me.remove(scriptPage, false);
        //插入到索引位置
        me.insert(index, scriptPage);
      }

      me.setActiveTab(scriptPage);
    },

    /**
     * 添加一个页面
     * @param  {Object}   routeData     路由数据
     * @param  {Object}   viewConfig    view初始化对象
     * @param  {int}      index         页面的索引
     */
    addScriptPage: function(routeData, viewConfig, index) {
      var me, scriptPage;

      me = this;
      
      scriptPage = {
        //如果页面数量为0那么不能关闭
        closable: me.items.count() > 0,
        //路由数据
        routeData: routeData,
        //路由数据Mapper初始化对象
        routeDataMapper: me.routeDataMapper,
        //view配置对象
        viewConfig: viewConfig
      };

      if (index == undefined) {
        scriptPage = me.add(scriptPage);
      } else {
        scriptPage = me.insert(index, scriptPage);
      }
      return scriptPage;
    },

    /**
     * 通过路由数据获取页面
     * @param  {Object} 	routeData   	路由数据
     */
    getPageByRouteData: function(routeData) {
      var scriptPage,
        items = this.items.data,
        i, index;

      //从后往前找
      for (index = items.length - 1, i = -1; index > i; index--) {
        //对比routeData
        if (items[index].compaireRouteData(routeData)) {
          scriptPage = items[index];
          break;
        }
      }

      return scriptPage;
    },

    /**
     * 获取页面的索引
     */
    getScriptPageIndex: function(scriptPage) {
      return this.items.indexOf(scriptPage);
    },

    onRender: function() {
      var me = this;

      me.callParent(arguments);

      me.renderActions();
      me.renderMenuBtn();
    },

    /*创建工具栏*/
    renderActions: function() {
      var me = this;

      if (!me.actionWrap) {
        //工具栏容器
        me.actionWrap = me.stripWrap.createChild({
          target: 'div',
          'class': 'x-nav-panel-actions',
          children: [{
            target: 'ol',
            'class': 'x-actions'
          }]
        }, 0);
      }
    },

    /**
     * 绘制菜单按钮
     */
    renderMenuBtn: function() {
      var me=this;
      me.menuBtn = me.stripWrap.createChild({
        target: 'div',
        'class': 'x-nav-panel-menu-btn',
        'data-qtip': '打开新的标签页'
      }, 0);

      me.menuBtn.on('click', me.appendMenuPage, me);
    },

    /**
     * 打开菜单页面
     */
    appendMenuPage: function() {
      var me = this,
        menuPage;

      if (me.menuRouteData) {
        menuPage = me.addScriptPage(me.menuRouteData);
        me.setActiveTab(menuPage);
      }
    },

    /**
     * 处理页面提交上来的事件
     * @param  {String} 	eventName 		事件名称
     * @param  {Array} 		args      		参数
     */
    processEvent: function(eventName, args) {
      var me = this;

      eventName = 'on' + eventName;

      //调用相应处理函数
      if (Q.isFunction(me[eventName])) {
        me[eventName].apply(me, args || []);
      }
    },

    /**
     * 页面路由数据变更处理函数
     * @param  {ScriptPage} 		scriptPage 		ScriptPage实例
     * @param  {Object} 			routeData     	路由数据
     * @param  {Object} 			old     		旧的路由数据
     */
    onScriptPageRouteDataChange: function(scriptPage, routeData, old) {
      var me = this;

      // 如果发生变化的为激活页面
      if (scriptPage === me.activeTab) {
        //触发activePageRouteDataChange事件
        me.fire('activepageroutedatachange', me, scriptPage, routeData, old);
      }
    },


    /*调整scrollerRight位置*/
    autoScrollTabs: function() {
      var me = this,
        stripRight, marginRight;

      me.callParent(arguments);

      if (me.scrolling) {
        //调整右边位置
        me.scrollRight.alignTo(me.strip, 'tl-tr', [25, 0]); //预留addMenuBtn位置
        me.scrollLeft.alignTo(me.strip, 'tr-tl');
      }

      marginRight = me.actionWrap.outerWidth(true);

      if (me.menuBtn) {
        me.adjustMenuBtn();
        marginRight += me.menuBtn.outerWidth(true);
      }

      me.strip.css('marginRight', marginRight);
    },

    /*调整menuBtn位置*/
    adjustMenuBtn: function() {
      var edgePos = parseInt(this.edge.css('left'), 10) || 0,
        stripWrapWidth = this.strip.innerWidth(),
        alignEl;

      //标签总宽度大于容器宽度
      alignEl = edgePos > stripWrapWidth ?
        this.strip :
        this.edge;

      this.menuBtn.alignTo(alignEl, 'l-r', this.menuBtnOffsets);
    }
  });



  return Navigation;
});