/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-02 20:17:56
 * @description 带有超链接的Column
 */
define(['controls'], function($) {

  var LinkColumn,
    type;

  type = 'LinkColumn';

  LinkColumn = $.grid.Columns['Link'] = Q.Class.define($.grid.Columns.Column, {

    type: type,

    tpl: '<a href="<%=src%>"><%=text%></a>',

    src: 'javascript:;',

    /**
     * 初始化
     */
    init: function() {
      var me = this;

      me.callParent(arguments);

      //覆盖默认的renderer
      me.renderer = Q.String.format('<a class="x-link-column-text" href="' + me.src + '">{0}</a>');
    },

    /**
     * 重写 处理发生在组件内的事件
     * @param  {string} name 事件名称
     * @param  {event} e Dom事件对象
     * @param  {grid} grid 表单
     * @param  {int} rowIndex 行索引
     * @param  {int} colIndex 列索引
     */
    processEvent: function(name, e, grid, rowIndex, colIndex) {

      if (Q.Element.is(e.target, 'a.x-link-column-text')) {
        grid.fire(type.toLowerCase() + name, grid, rowIndex, colIndex);
      }

      return this.callParent(arguments);
    },

    destroy: function() {
      var me = this;
      delete me.renderer;
      me.callParent(arguments);
    }
  });

  return LinkColumn;
});