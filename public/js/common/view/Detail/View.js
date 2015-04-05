/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-28 22:37:13
 * @description 详情view
 *
 *              该视图存在三个维度
 *              1.视图动作状态（Create 新建模式、Edit 编辑模式）
 *
 *              2.数据状态（暂存、已创建、审核中、已审核、重新审核）
 *
 *              3.禁用状态（已禁用、未禁用）
 *
 *
 */
define([
  'infrastructure/view/FormView',
  'common/view/Detail/verbStates',
  'common/view/Detail/Activity',
  'common/command/LoadCommand',
], function(FormView, verbStates, Activity, LoadCommand) {
  var DetailView;

  /*详情列表视图*/
  DetailView = Q.Class.define(FormView, {

    type: 'DetailView',

    /*最小宽度*/
    minWidth: 960,

    /**
     * 动作标题分隔符
     */
    verbSeperator: ' - ',

    /*动作状态*/
    verbState: undefined,

    padding: '0 50px 0',


    defaults: {
      background: false,
      border: false
    },

    /**
     * private
     * 首次布局完成后
     * 初始化VerbState
     */
    onFirstLayoutComplete: function() {
      var me = this;

      //初始化视图行为状态
      me.initVerbState();
    },

    /**
     * 获取单据ID
     * @return {[type]} [description]
     */
    getRecordID: function() {
      var me = this,
        routeData;

      //如果存在数据
      if (me.data) {
        return me.data.id;
      }

      routeData = this.getRouteData();

      if (routeData.id) {
        return routeData.id;
      }
    },

    /*获取活动对象*/
    getActivity: function() {
      var me = this;

      if (!me.activity) {
        me.activity = new Activity({
          api: me.api,
          view: me
        });
      }

      return me.activity;
    },

    /**
     * 提示记录已更改是否先保存
     * 如果用户点击了确定 则执行保存操作
     * 点击了取消则执行cancelCallbak
     * @param  {function}     cancelHandler     取消的回调
     * @param  {array}        params            参数数组
     * @param  {object}       scope             取消回调的上下文
     */
    alertRecordModified: function(cancelHandler, params, scope) {
      var me = this;

      me.callViewport('alert', {
        type: 'info',
        title: '操作提示',
        message: '内容已修改，是否先保存？',
        fn: function(result) {
          result === 'yes' ? this.save() : cancelHandler.apply(scope || me, params || []);
        },
        scope: me,
        modal: true,
        closeable: false,
        buttons: ['yes', 'no']
      })
    },



    /*---------------------------第一个维度 视图动作状态----------------------*/
    /**
     * private
     * 初始化动作状态
     */
    initVerbState: function() {
      var me = this,
        verb = me.getVerb();

      //视图动作状态不存在
      if (verb === undefined || !(verb in verbStates)) {
        //提示错误信息
        me.callViewport('alert', {
          type: 'error',
          title: '发生错误',
          message: '视图行为状态不存在或是不为已知的状态类型！',
          scope: me,
          fn: function() {
            this.callViewport('destroy');
          },
          modal: true
        })
        return;
      }

      me.setVerbState(new verbStates[verb]());
    },

    /**
     * 获取视图的动作状态名称
     */
    getVerb: function() {
      var routeData = this.getRouteData();

      if (routeData) {
        return routeData.verb;
      }
    },

    /**
     * 设置视图行为状态
     */
    setVerbState: function(verbState) {
      var me = this;

      //解除旧的
      if (me.verbState && me.verbState.setView) {
        me.verbState.setView(null);
      }

      me.verbState = verbState;

      if (verbState && verbState.setView) {
        verbState.setView(me);
      }

      //触发视图状态变更事件
      me.fire('verbStatechange', me, verbState);
    },

    /**
     * private
     */
    setVerbTitle: function(verbTitle) {
      if (!verbTitle) {
        return;
      }

      var me = this,
        title = me.title || '',
        seperator = me.verbSeperator,
        sepIndex = title.lastIndexOf(seperator);

      title = (sepIndex < 0 ?
        title + seperator :
        title.slice(0, sepIndex + 1)) + verbTitle;

      me.setTitle(title);
    },


    /*-----------------------视图操作-----------------------*/
    load: function() {
      var me = this,
        recordId;

      //id为空
      if ((recordId = me.getRecordID()) == undefined) {
        //提示错误信息
        me.callViewport('alert', {
          type: 'error',
          title: '数据加载错误',
          message: '视图ID未知,无法请求数据。',
          modal: true
        })
        return;
      }

      //执行送审命令
      me.getCommandManager().exec(
        new LoadCommand(me.getActivity(), {
          recordId: recordId
        }));
    },

    /**
     * 创建新的数据
     */
    createNew: function() {
      this.verbState.createNew();
    },

    /**
     * 保存
     */
    save: function() {
      console.log(this.getValues());
    }
  });


  return DetailView;
});