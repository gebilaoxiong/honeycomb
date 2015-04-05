/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-03-27 21:42:52
 * @description 宽度自适应布局 anchor布局还是有很多不足
 */

define(['controls'], function($) {

  var FitWidthLayout

  FitWidthLayout = Q.Class.define($.layout.ContainerLayout, {

    type: 'FitWidth',

    itemCls: 'x-fitWidth-item',

    layoutCls: 'x-fitWidth-layout-ct',

    monitorResize: true,

    /**
     * 获取布局容器宽度
     * @return {int} 布局容器宽度
     */
    getLayoutElWidth: function() {
      var layoutEl = this.host.getLayoutTarget();

      if (layoutEl) {
        return layoutEl.width();
      }
    },

    /**
     * 布局
     * @param  {Component} host   宿主控件
     * @param  {Element} target 控件布局容器
     */
    onLayout: function(host, target) {
      this.callParent(arguments);

      if (!host.collapsed) {
        this.setItemWidth(this.getLayoutElWidth());
      }
    },

    /**
     * 调整子项宽度
     * @param {int} width 容器宽度
     */
    setItemWidth: function(width) {
      var items = this.host.items;
      if (items) {
        items.each(function(_, cmp) {
          if (cmp.setWidth) {
            cmp.setWidth(width);
          }
        });
      };
    }
  });

  $.layout.LayoutManager.register(FitWidthLayout);

  return FitWidthLayout;
});