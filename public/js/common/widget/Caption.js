/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-15 13:50:16
 * @description 标题控件
 */
define(['controls'], function($) {
  var Caption,

    textModel = '<span class="x-caption-text"></span>';

  Caption = Q.Class.define($.BoxComponent, {

    /*点击handler*/
    handler: undefined,

    scope: undefined,

    /*标签*/
    autoEl: 'h3',

    /*标题内容*/
    text: '',

    width:260,

    /**
     * 重写绘制DOM阶段
     */
    onRender: function() {
      var me = this;

      me.callParent(arguments);

      //添加样式标记
      me.el.addClass('x-caption');

      //textEl
      Q.Element.insertAdjacentHTML(me.el.dom, 'afterbegin', textModel);
      me.textEl = Q.get(me.el.dom.firstChild);

      me.el.bind('click', me.onClick, me);
    },

    /**
     * 重写afterRender
     */
    afterRender: function() {
      var me = this;

      if (me.text) {
        me.setText(me.text);
      }

      me.callParent(arguments);
    },

    /*重写初始化事件*/
    initEvent: function() {
      var me = this;

      me.callParent(arguments);

      if (me.handler) {
        me.bind('click', me.handler, me.scope);
      }
    },

    /**
     * 设置点击事件处理函数
     * @param {function}            handler             点击事件处理函数
     * @param {object}              scope               上下文
     */
    setHandler: function(handler, scope) {
      var me = this;

      if (me.handler) {
        me.unbind('click', me.handler, me.scope);
      }

      me.bind('click', me.handler = handler, me.scope = scope);
    },

    /**
     * dom事件点击处理函数
     * @param  {event}              e                   dom事件对象
     */
    onClick: function(e) {
      var me = this;

      if (!me.disabled) {
        me.fire('click', me, e);
      }
    },

    setText: function(text) {
      var me = this;

      if (me.textEl) {
        me.textEl.text(text);
      }


      me.fire('textchange', me, text);
    }
  });

  return Caption;
})