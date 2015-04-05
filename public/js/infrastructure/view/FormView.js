/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-03 14:55:45
 * @description 表单视图
 */
define([
  'infrastructure/view/ViewPartial',
  'infrastructure/module/FormModule'
], function(ViewPartial, FormModule) {

  var FormView;

  FormView = Q.Class.define(FormModule, ViewPartial, {

    /**
     * 数据是否发生了变更
     */
    isDirty: function() {
      return callFromMethod.call(this, 'isDirty');
    },

    /**
     * 重置视图
     * @param  {bool}       force                是否强制重置
     */
    reset: function(force) {
      var me = this;

      if (force === true || !me.isDirty()) {
        callFromMethod.call(me, 'reset');
      } else {
        me.alertRecordModified(me.reset, [true], me);
      }
    },


    /**
     * 重写setValues
     * 将数组赋值给表格控件
     */
    setValues: function(value) {
      var me = this,
        fields = {},
        store;

      Q.each(value, function(key, val) {
        var cmp;

        if (!Q.isArray(val)) {
          fields[key] = val;
          return;
        }

        //如果为数组
        //赋予数据源控件 //grid
        if ((cmp = me.findeByAlias(key)) && (store = cmp.getStore())) {
          store.clearData();
          store.loadData(val);
        }

      });

      me.form.setValues(value);

      //触发datachange事件
      me.fire('datachange', me, value);
    },

    /**
     * 获取表单值
     */
    getValues: function(dirtyOnly) {
      return callFromMethod.call(this, 'getFieldValues', dirtyOnly)
    }
  });


  /**
   * 调用form模块的BasicForm的方法
   * @param  {string}       method      方法名称
   * @param  {Array}        array       方法参数数组
   */
  function callFromMethod(method, params) {
    var form;

    if (form = this.getForm()) {
      return form[method].apply(form, params || []);
    }
  }

  return FormView;
});