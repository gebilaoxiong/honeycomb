/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-03 21:46:00
 * @description 过滤项
 *
 * @event   filterFieldchange 过滤字段变更
 *          参数
 *          @param  {eventObj} e        	事件对象
 *          @param  {FilterItem} FilterItem 过滤项
 *          @param  {Record}  newRecord  	新的记录
 *          @param  {Record}  oldRecord   	旧的记录
 */
define([
  'controls',
  'common/widget/layout/FilterItemLayout'
], function($, FilterItemLayout) {

  var FilterItem, ComboBox;

  ComboBox = $.form.ComboBox;

  FilterItem = Q.Class.define($.Container, {

    type: 'FilterItem',

    fildWrapCls: 'x-filter-field',

    editorWrapCls: 'x-filter-editor',

    /*是否可关闭*/
    closable: false,

    operator: null,

    /*过滤字段配置*/
    fieldConfig: {
      minChars: 1,
      lazyRender: true,
      typeAhead: true,
      triggerAction: 'all',
      lazyRender: true,
      mode: 'local',
      valueField: 'id',
      displayField: 'text',
      /*筛选属性的值*/
      value: undefined
    },

    /*上一次过滤字段选中的记录*/
    lastFiledSelectRecord: undefined,


    /**
     * 重载配置函数
     * @param  {object} settings 配置对象
     */
    configuration: function(settings) {
      settings = settings || {};

      if (settings.fieldConfig) {

        settings.fieldConfig =
          Q.extend({}, this.fieldConfig, settings.fieldConfig);
      }

      this.callParent(arguments);

      this.layout = FilterItemLayout;
    },

    /**
     * 重载初始化子控件
     */
    initComponent: function() {
      var me = this,
        editor;

      me.callParent(arguments);

      if (!me.field) {
        me.field = new ComboBox(me.fieldConfig);
      }

      me.field.bind({
        beforeselect: me.onFieldSelect,
        scope: me
      });

      if (me.editor) {
        editor = me.editor;
        delete me.editor;
        this.setEditor(editor);
      }
    },

    onRender: function() {
      this.callParent(arguments);
      this.el.addClass('x-filter-item clearfix');
    },

    /**
     * 绑定 过滤字段的Store
     * @param  {Store} store
     */
    bindFieldStore: function(store) {
      if (store && store.autoDestroy) {
        //共享store由FilterPanel统一销毁
        store.autoDestroy = false;
      }

      this.field.bindStore(store);
    },

    /**
     * 子控件ComboBox的select处理函数 如果值与最后一次的值不相同  触发本控件的 filterfilterFieldchange事件
     * @param  {eventObj} e        事件对象
     * @param  {ComboBox} comboBox 事件源
     * @param  {Record} record   	记录
     * @param  {int} index    		索引
     */
    onFieldSelect: function(e, comboBox, record, index) {
      var me = this,
        lastRecord;

      if (record) {
        lastRecord = me.lastFiledSelectRecord;

        if (record != lastRecord) {
          me.lastFiledSelectRecord = record;

          me.fire('fieldselectchange', me, record, lastRecord);
        }
      }
    },

    /**
     * 获取过滤字段的值
     * @return {mixed} comboBox选中的值
     */
    getFieldValue: function() {
      return this.field.getValue();
    },

    /**
     * 设置过滤字段的值
     * @param {mixed} value comboBox的值
     */
    setFieldValue: function(value) {
      this.field.setValue(value);
      return this;
    },

    /**
     * 设置条件字段控件
     * @param {Component|Object} editor 条件字段控件或配置对象
     */
    setEditor: function(editor) {
      var me = this;

      /*如果是已完成绘制 则将条件控件绘制到editorWrap中*/
      if (editor && me.editor && me.editor.destroy) {
        me.editor.destroy();
      }

      if (editor) {
        editor = this.lookupCmp(editor);
        me.editor = editor;
      }

      if (me.rendered) {
        this.doLayout();
      }
    },

    /**
     * 获取过滤条件
     * @param  {Boolean} returnFilter 是否返回$.util.Filter对象
     */
    getFilter: function(returnFilter) {
      var me = this,
        filed, value, ret;

      if (!me.editor ||
        Q.isUndefined(value = me.editor.getValue()) ||
        Q.isUndefined(field = me.field.getValue())) {
        return;
      }

      ret = {
        property: field,
        operator: me.operator,
        value: value
      };

      return returnFilter === true ?
        new $.util.Filter(ret) :
        ret;
    },

    beforeDestroy: function() {
      Q.destroy(this.editor, this.field);
      this.editor = this.field = null;
      this.callParent(arguments);
    }
  });

  FilterItem.prototype.defaultType = $.form.TextField;

  return FilterItem;
});