/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-14 21:51:22
 * @description 菜单页面
 */
define([
  'infrastructure/view/View',
  'project/Default/Menu/Index/module/DirTree',
  'project/Default/Menu/Index/module/DataView'
], function(View, MenuDirTree, DataView, founditionData) {
  var IndexView;

  IndexView = Q.Class.define(View, {
    type: 'MenuView',

    /*标题*/
    title: '打开新的标签页',

    /*暗色调页面*/
    dark: true,

    layout: 'border',

    /*子模块附加布局属性*/
    cmpDefaults: {
      'menuDir': {
        region: 'west',
        width: 200
      },
      'menuView': {
        region: 'center'
      }
    },

    /*子模块事件处理*/
    cmpEvents: {
      'menuDir': {
        'selectionchange': 'onMenuDirSelectionChange'
      },
      'menuView': {
        'click': 'onMenuViewClick'
      }
    },

    /*copyright*/
    footerCfg: {
      'class': 'x-menu-footer',
      children: [{
        'class': 'x-menu-footer-inner',
        content: 'Copyright © 2014 简约'
      }]
    },

    items: [{
      alias: 'menuDir',
      xtype: MenuDirTree
    }, {
      alias: 'menuView',
      xtype: DataView
    }],

    /*树节点选中项变更处理函数*/
    onMenuDirSelectionChange: function(e, selModel, node, lastNode) {
      var me = this,
        menuView = me.items.get('menuView');

      if (!menuView) {
        return;
      }

      menuView.setData(node.attributes.data||[]);
    },

    /*菜单视图中item点击事件处理函数*/
    onMenuViewClick: function(e, menuView, index) {
      var record = menuView.store.getAt(index),
        data = record.data,
        routeData;

      if (data.dir) {
        return;
      }

      routeData = {
        module: data.module,
        part: data.part,
        view: data.view
      };

      this.redirectTo(routeData, null, true);
    }
  });

  return IndexView;
})