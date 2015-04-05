/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-15 14:16:21
 * @description 菜单树
 */
define([
  'controls',
  'project/Default/Menu/Index/data/menuDirRoot'
], function($, menuDirRoot) {
  var MenuDirTree;

  MenuDirTree = Q.Class.define($.tree.Panel, {
    type: 'MenuDirTree',

    /*隐藏根节点*/
    rootVisible: false,

    useArrows: true,

    cls: 'x-menu-tree',

    /*根*/
    root: menuDirRoot,

    /*开启备忘录模式*/
    stateful: true,

    stateEvents: ['click'],

    afterRender: function() {
      var me = this,
        node;

      me.callParent(arguments);
      me.relayEvents(me.selModel, ['selectionchange']);

      //展开路径
      if (me.lastSelectedNodePath) {
        me.expandPath(me.lastSelectedNodePath);
      }

      //选中节点
      if (me.lastSelectedNodeId != undefined && (node = me.getNodeById(me.lastSelectedNodeId))) {
        node.select();
      }
    },

    /*-----------------------重写备忘录模式接口-----------------------------*/
    getStateId: function() {
      return 'menuDirTree';
    },

    /*获取当前状态*/
    getState: function() {
      var me = this,
        node = me.selModel.getSelectedNode();

      return {
        lastSelectedNodeId: node.id,
        lastSelectedNodePath: node.getPath()
      }
    }
  });

  return MenuDirTree;
})