/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-17 14:06:42
 * @description 下拉表格字段(用于检索编码 点击triggerBtn触发onTriggerClick事件)
 *              常被filterPanel捕获 打开另外一个窗口
 */
define([
  'controls',
  'common/widget/form/ComboGridBox',
  'common/viewport/QueryWindow'
], function($, ComboGridBox, QueryWindow) {

  var SearchComboBox;

  SearchComboBox = Q.Class.define(ComboGridBox, {

    type: 'SearchComboBox',

    triggerCls: 'x-form-trigger-search',

    //value的id属性名称
    valueField: 'id',

    //value的文本属性名称
    displayField: 'name',

    minChars: 1,

    listWidth: 360,

    listEmptyText: '没有找到相关结果',

    //开启分页
    pageSize:5,


    /**
     * 重写triggerBtnClick处理函数
     */
    onTriggerClick: function(e) {
      var me = this,
        val = me.getValue();

      e.stopPropagation();

      //收起下拉列表
      me.collapse();
      //打开窗口
      me.openWindow();

      //触发搜索按钮点击事件
      me.fire('ontriggerbtnclick', me, val);
    },

    /*重写store的beforeload事件处理函数*/
    onBeforeLoad: Q.noop,

    /**
     * 打开窗口
     */
    openWindow: function() {
      var me = this,
        routeData = me.routeData,
        editor, caller;

      if (!routeData) {
        return;
      }

      //作为editor的时候没有ownerCt 
      caller = !me.ownerCt && (editor = $.ComponentMgr.get(me.container.attr('id'))) ?
        editor : me;

      //销毁
      if (me.win && !me.win.isDestroyed) {
        me.win.destroy();
      }

      //绑定窗口的gridrowselected事件
      me.win = caller.callViewport('openWindow', QueryWindow, routeData, {
        listeners: {
          gridrowselected: me.onWindowViewRowSelected,
          scope: me
        }
      });
    },

    /**
     * 重写验证是否失去焦点
     */
    validateBlur: function() {
      var me = this,
        ret = me.callParent(arguments);

      if (me.inEditor) {
        ret = (!me.win || me.win.isDestroyed) && ret;
      }

      return ret;
    },
    /**
     * 获取名键值
     */
    getValue: function() {
      var me = this;
      return me.buildValue(me.callParent(arguments), me.lastSelectionText);
    },

    buildValue: function(value, text) {
      var me = this,
        ret = {};

      ret[me.valueField] = value;
      ret[me.displayField] = text;

      return ret;
    },

    /**
     * 窗口视图行选中事件处理函数
     * @param  {Event}            e                   事件对象
     * @param  {ScriptWindow}     scriptWindow        窗口对象
     * @param  {GridModule}       gridModule          表格模块
     * @param  {Record}           record              行记录数据
     */
    onWindowViewRowSelected: function(e, scriptWindow, gridModule, record) {
      var me = this,
        value;

      e.preventDefault();
      e.stopPropagation();

      value = me.buildValue(record.get(me.valueField), record.get(me.displayField));
      me.setValue(value);

      //window销毁
      me.win.destroy();

      if (me.inEditor) {
        //触发edit的complete事件
        me.fire('blur', me);
      } else {
        me.focus();
      }
    }

  });

  return SearchComboBox;
});