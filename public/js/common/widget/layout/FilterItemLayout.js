/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-04 15:15:38
 * @description 过滤条件布局
 */
define(['controls'], function($) {

  var FilterItemLayout, innerHtml;

  innerHtml = [
    '<div class="x-filter-filed"></div>',
    '<div class="x-filter-tools">',
    '<div class="x-filter-editor-inner"></div>',
    '</div>',
    '<div class="x-filter-editor"></div>',
  ].join('');

  FilterItemLayout = Q.Class.define($.layout.ContainerLayout, {
    type: 'FilterItemLayout',

    monitorResize: true,

    separatorWidth: 16,

    /*字段控件容器className*/
    fieldWrapCls: 'x-filter-filed',

    /*条件控件容器className*/
    editorWrapCls: 'x-filter-editor',

    /*工具容器*/
    toolWrapCls: 'x-filter-tools',

    /**
     * 布局
     * @param  {Component} host   宿主控件
     * @param  {Element} target 控件布局容器
     */
    onLayout: function(host, target) {
      var me = this,
        editor, toolDomCfg;

      me.callParent(arguments);

      //如果没有绘制子控件容器
      if (!me.structReady) {

        if (!me.tpl) {
          FilterItemLayout.prototype.tpl = new $.util.Template([
            '<div class="<%=fieldWrapCls%>"></div>',
            '<div class="<%=editorWrapCls%>">',
            '<div class="x-filter-editor-inner"></div>',
            '</div>',
            '<div class="<%=toolWrapCls%>">',
            '<%if(closable===true){%>',
            '<div class="x-tool x-tool-remove"></div>',
            '<%}%>',
            '</div>'
          ]);
        }

        target.dom.innerHTML = me.tpl.compile({
          fieldWrapCls: me.fieldWrapCls,
          editorWrapCls: me.editorWrapCls,
          toolWrapCls: me.toolWrapCls,
          closable: host.closable
        });

        //过滤字段容器
        me.fieldWrap = target.child('.' + me.fieldWrapCls);
        //编辑控件容器
        me.editorInner = target.child('.' + me.editorWrapCls + '-inner');
        //工具容器
        me.toolWrap = target.child('.' + me.toolWrapCls);

        me.structReady = true;
      }

      //如果字段没有绘制 dom 则将dom绘制到fieldWrap中
      if (!host.field.rendered) {
        host.field.render(me.fieldWrap);
      }

      //如果有条件控件  且条件控件没有绘制  则绘制到editorWrap中
      if ((editor = host.editor) && !editor.rendered) {
        host.editor.render(me.editorInner);
      }

      me.autoSize();
    },

    /**
     * 自动调整尺寸
     */
    autoSize: function() {

      /*字段控件容器的宽度为控件的outerWidth*/
      this.fieldWrap.outerWidth(false, this.host.field.wrap.outerWidth(false));
      this.fieldWrap.css('marginRight', -1 * this.fieldWrap.outerWidth(false));
      /*条件容器的左编剧为字段容器的宽度*/
      this.editorInner.css('paddingLeft', this.separatorWidth + this.fieldWrap.outerWidth(false));

      /*将条件控件的宽度设成容器宽度*/
      if (this.host.editor) {
        this.host.editor.setWidth(this.editorInner.width());
      }
    },

    /**
     * 销毁
     */
    destroy: function() {
      var me = this;

      Q.destroy(me.fieldWrap, me.editorInner, me.toolWrap);
      me.fieldWrap = me.editorInner = null;

      me.callParent(arguments);
    }
  });

  return FilterItemLayout;
});