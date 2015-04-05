/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-28 13:13:31
 * @description
 */
define(['controls'], function($) {

  var Ajax = $.data.Ajax,
    ViewActions,
    statics = {},
    postFailureCallback, getFailureCallback;


  ViewActions = Q.Class.define($.util.Observable, {

    type: 'ViewActions',

    /*是否锁定*/
    locked: false,

    /*视图*/
    view: undefined,


    /**
     * ajax路径
     * {
     *   actionName:{url:'xxx',method:'POST'},
     *   remove:{url:'xxx/xx/remove',method:'POST'}
     * }
     */
    api: undefined,

    /**
     * 初始化
     * @param  {Object}       options         初始化配置
     */
    init: function(options) {
      var me = this;

      Q.extend(me, options);

      me.callParent(arguments);
    },

    /**
     * 执行异步操作
     * @param  {Object}       options           异步操作选项
     */
    request: function(options) {
      var me = this,
        xhrId;

      if (me.locked) {
        me.view.alert({
          type: 'info',
          message: '一个操作正在执行中，请稍等...'
        });

        return false;
      }

      options.callback = me.createRequestCallback(options);

      if (me.onBeforeRequest(options) !== false) {
        xhrId = Ajax.request(options);
      }

      return xhrId;
    },

    onBeforeRequest: function(options) {
      var me = this;

      //进入锁定状态
      me.locked = true;
      //打开遮罩
      me.view.showProcessMask();

      //触发事件
      return me.fire('beforerequest', options);
    },

    requestComplete: function(options, isSuccess, response) {
      var me = this;

      //取消锁定
      me.locked = false;
      //关闭遮罩
      me.view.hideProcessMask();

      //触发请求完成事件
      me.fire('requestcomplete', options, isSuccess, response);
    },

    /**
     * @private
     * 创建一个回调函数
     * 主要是让请求完成的时候解锁
     * 并触发requestcomplete事件
     * @param  {Object}       options           异步操作选项
     */
    createRequestCallback: function(options) {
      var me = this,
        callback;

      return function(_, isSuccess, response) {
        //执行callback

        if (callback) {
          callback.call(options.scope || me, options, isSuccess, response);
        }

        me.requestComplete(options, isSuccess, response);
      }
    },

    /**
     * 解析响应
     */
    decodeRecponse: function(response) {

      try {
        return Q.JSON.parse(response.responseText);
      } catch (e) {
        return false;
      }
    },

    destroy: function() {
      var me = this;

      me.callParent(arguments);
      me.view = null;
    }

  });


  /**
   * 定义一个ViewAction类型
   * @param  {ViewActions}       parent           父类型
   */
  statics.define = function(parent) {
    return Q.extend(Q.Class.define(parent || this), statics);
  };


  /**
   * 定义一个异步操作
   * @param  {String}           actionType        操作类型（POST|GET）
   * @param  {String}           actionName        操作名称
   * @param  {Function}         success           成功的回调
   * @param  {Function}         failure           失败回调(可选)
   */
  statics.defineAsyncAction = function(actionType, actionName, success, /*optional*/ failure) {
    var isPostAction, successHandler, failureHandler;

    isPostAction = actionType.toLowerCase() === 'post';
    failure = failure || (isPostAction ? postFailureCallback : getFailureCallback);

    //成功响应
    successHandler = isPostAction ?

    //提交数据成功回调
    function(response, options) {
      var me = this,
        result = processResponse.call(me, response);

      result === true || result.success ?
        success.call(me, result, response) :
        failure.call(me, response, options);
    } :

    //请求数据成功回调 
    function(response, options) {
      var me = this,
        result = processResponse.call(me, response);

      //没有返回数据 或者seccess为false 视为请求失败
      (result === true || !result.success || !result.data) ?
        failure.call(me, response, options) :
        success.call(me, result, response);
    };

    //在上下文的原型链上定义action
    this.prototype[actionName] = function(params) {
      var me = this,
        api, options;

      //获取api
      if (!me.api || !(api = me.api[actionName])) {
        //api未定义
        throw new Error(['api is undefined! action name:', actionName].join(''));
      }

      //ajax选项
      options = {
        scope: me,
        url: api.url,
        method: api.method,
        params: params,
        success: successHandler,
        failure: failure
      }

      return me.request(options);
    }
  }


  /**
   * 定义一个提交的操作
   * @param  {String}           actionName        操作名称
   * @param  {Function}         success           成功的回调
   * @param  {Function}         failure           失败回调(可选)
   */
  statics.definePostAction = function(actionName, success, /*optional*/ failure) {
    return statics.defineAsyncAction.call(this, 'post', actionName, success, failure);
  }
  /**
   * 定义一个加载的操作
   * @param  {String}           actionName        操作名称
   * @param  {Function}         success           成功的回调
   * @param  {Function}         failure           失败回调(可选)
   */
  statics.defineGetAction = function(actionName, success, /*optional*/ failure) {
    return statics.defineAsyncAction.call(this, 'get', actionName, success, failure);
  }



  //处理响应信息
  function processResponse(response) {
    var ret;

    //没有返回任何消息 表示一个提交操作成功
    if (!response.responseText && !response.responseXML) {
      return true;
    }

    //解析返回数据
    if (!(ret = this.decodeRecponse(response))) {
      ret = {
        success: false,
        message: '返回数据解析错误！'
      };
    }

    return ret;
  }


  postFailureCallback = failureCallbackFactory('post');
  getFailureCallback = failureCallbackFactory('get');



  /**
   * 失败回调处理函数工厂
   */
  function failureCallbackFactory(actionType) {
    var title = actionType === 'post' ?
      '操作失败！' :
      '请求失败！';

    return function(response, options) {
      var me = this,
        ret = me.decodeRecponse(response),
        message;

      if (ret) { //服务器处理失败
        message = ret.message ? ret.message : '服务器没有返回数据，可能请求的数据不存在。';
      } else {
        message = ['status：' + response.status, 'statusText：' + response.statusText];
      }

      me.view.callViewport('alert', {
        type: 'error',
        title: title,
        message: message,
        modal:true
      });
    }
  }

  Q.extend(ViewActions, statics);


  return ViewActions;
});