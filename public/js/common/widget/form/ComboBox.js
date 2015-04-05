/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-01 03:22:53
 * @description 下拉选项框
 */

define([
  'controls'
], function($) {
  var ComboBox;

  ComboBox = Q.Class.define($.form.ComboBox, {

    type: 'ComboBox',

    valueField: 'id',

    displayField: 'text',

    /**
     * 重写设置值
     * @param {Object|String}         value         值
     */
    setValue: function(value) {
      var me = this,
        key, text;

      if (!me.rendered) {
        me.lazyRenderValue = value;
        me.bind('afterrender', me.onAfterRender, me, {
          single: true
        });
        return;
      }

      //如果传入的为object类型的值
      //不验证 因为此时的 store不包含该值
      if (Q.isObject(value)) {
        //获取键值和文本值
        key = value[me.valueField];
        text = value[me.displayField];

        //设置值
        me.value = key;
        //设置文本
        me.el.val(text);
        me.lastSelectionText = text;

      } else {
        me.callParent(arguments);
      }

      return me;
    },

    onAfterRender: function(e) {
      var me = this,
        lazyRenderValue;

      if (lazyRenderValue = me.lazyRenderValue) {
        delete me.lazyRenderValue;
        me.setValue(lazyRenderValue);
      }

    }
  });

  return ComboBox;
})