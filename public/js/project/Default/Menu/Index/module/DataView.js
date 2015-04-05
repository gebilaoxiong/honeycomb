/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-14 22:45:48
 * @description 菜单面板
 */
define([
  'controls',
  'project/Default/Menu/Index/data/Store'
], function($, MenuStore) {
  var MenuDataView, tpl;


  tpl = [
    '<%var i=0,item;while(item=$root[i++]){',
    'if(item.dir){%>',
    /*标题*/
    '<dt class="x-item x-menu-title x-menu-layout-item"><%=item.title%></dt>',
    '<%}else{%>',
    /*菜单项*/
    '<dd class="x-item x-menu-link x-menu-layout-item"><a href="javascript:;">',
    '<%=item.title%>',
    '</a></dd>',
    '<%}%>',
    '<%}%>'
  ];


  MenuDataView = Q.Class.define($.DataView, {
    type: 'MenuDataView',

    cls: 'x-nav-menu-list x-menu-layout-ct',

    tpl: tpl,

    autoEl: 'dl',

    singleSelect: true,

    itemSelector: '.x-item',

    store: {
      xtype: MenuStore
    },

    /*列宽度*/
    columnWidth: 230,

    /*组间隔*/
    groupInterval: 8,

    origin: undefined,

    /*重写初始化*/
    init: function() {
      var me = this;

      me.origin = {};
      me.callParent(arguments);
    },

    /*设置数据*/
    setData: function(data) {
      var me = this;
      me.store.loadData(data);
      me.itemBoxReady = false;
      //调整布局
      me.onResize();
    },

    /*布局 没有必要写个layout*/
    onResize: function() {
      var me = this,
        point, ctHeight, itemHeight;

      if(!me.rendered){
        return;
      }

      //初始化原点
      me.resetOrigin();
      point = Q.extend({}, me.origin); //参考点
      ctHeight = me.el.height(); //容器内容高度

      //迭代所有项 让他们从上到下排列
      me.all.each(function(_, item) {
        //设置宽度
        if (!me.itemBoxReady) {
          Q.Element.outerWidth(item, true, me.columnWidth);
        }

        itemHeight = Q.Element.outerHeight(item, true);

        if (Q.Element.is(item, '.x-menu-title') && point.top != me.origin.top) {
          point.top += me.groupInterval;
        }

        //如果参考点高度+item高度大于容器高度
        //那么我们把参考点移动到下一列
        if (point.top + itemHeight > ctHeight) {
          point.top = me.origin.top;
          point.left += me.columnWidth;
        }

        //重新定位
        if (!Q.Object.equals(point, me.getItemPoint(item))) {
          Q.fly(item).css(point);
        }

        point.top += itemHeight;
      });

      me.itemBoxReady = true;
    },

    /*初始化原点*/
    resetOrigin: function() {
      var me = this,
        el = me.el;

      me.origin.top = el.getFrameWidth('top');
      me.origin.left = el.getFrameWidth('left');
    },

    getItemPoint: function(item) {
      return {
        top: Q.Element.css(item, 'top', true),
        left: Q.Element.css(item, 'left', true)
      }
    }
  });


  return MenuDataView;
});