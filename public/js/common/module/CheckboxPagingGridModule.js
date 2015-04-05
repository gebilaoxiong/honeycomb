/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-03-23 01:20:18
 * @description gridPanel模块
 */

define([
  'controls',
  'infrastructure/module/GridPanelModule'
], function($, GridPanelModule) {

  var CheckboxPagingGridPanel = Q.Class.define(GridPanelModule, {

    type: 'CheckboxPagingGridPanel',

    /*基数行变色*/
    stripeRows: true,

    background: false,

    initComponent: function() {
      var me = this;

      me.callParent(arguments);

      /*初始化组件完毕后添加分页工具栏*/
      me.createFbar({
        xtype: $.PagingToolbar,
        pageSize: 25,
        displayInfo: true,
        store: me.store
      });
    },

    configuration: function() {
      var me = this,
        columns;

      me.sm = new $.grid.selectModel.CheckboxSelectionModel();

      if (me.columns) {
        //复制一次数组 防止重复添加
        me.columns = me.columns.slice(0);
      } else {
        me.columns = [];
      }

      me.columns.unshift(me.sm);

      me.callParent(arguments);
    }
  });

  return CheckboxPagingGridPanel;
});