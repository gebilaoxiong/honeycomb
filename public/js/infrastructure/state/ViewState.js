/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-30 00:06:21
 * @description 视图状态基类
 */
define(['infrastructure/state/BaseState'], function(BaseState) {

  var ViewState;

  ViewState = Q.Class.define(BaseState, {

    type: 'BaseViewState',

    /**
     * 视图
     */
    view: undefined,

    /*前置过滤器*/
    prefilter: undefined,

    statics: {
      /**
       * 创建一个过滤器
       * @param  {Object}       prefilterHooks      前置过滤钩子
       */
      createPrefilter: createPrefilter
    },

    /**
     * 设置视图
     */
    setView: function(view) {
      var me = this;

      //解除
      if (view == undefined) {
        me.view = null;
        return;
      }

      if (!view.isXType('View') || view === me.view) {
        return;
      }

      me.onSetView(view);
      me.view = view;
    },

    onSetView: Q.noop,

    /*触发视图事件*/
    fire: function() {
      var view, ret;
      if (view = this.view) {
        ret = view.fire.apply(view, arguments);
      }
      return ret;
    }
  });

  /**
   * 前置过滤器工厂
   * @param  {Object}       prefilterHooks      前置过滤钩子
   */
  function createPrefilter(prefilterHooks) {
    /**
     * 前置过滤器
     * @param  {string}     action               操作名称
     */
    return function(action) {
      var me = this,
        view = me.view,
        inspector;

      if (!view) {
        return false;
      }

      //提示勿重复提交
      if (me.isSubmit) {
        view.alertError('操作提示', '操作执行中，请勿重复提交!')
        return false;
      }

      //执行钩子
      if (inspector = prefilterHooks[action]) {
        return inspector.call(me);
      }

      return me.isSubmit = true;
    }
  }

  return ViewState;
})