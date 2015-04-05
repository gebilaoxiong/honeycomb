/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-26 02:02:30
 * @description 视图动作状态
 *              create  创建状态
 *              edit    编辑状态
 */
define([
  'infrastructure/state/ViewState'
], function(ViewState, dataStates) {
  var verbStates = {};


  /**
   * 新建状态
   */
  verbStates.Create = Q.Class.define(ViewState, {

    state: 'create',

    onSetView: function(view) {
      //设置动作标题
      view.setVerbTitle('新增')
    },

    /**
     * 新建
     */
    createNew: function() {
      this.view.reset();
    }
  });


  /**
   * 编辑状态
   */
  verbStates.Edit = Q.Class.define(ViewState, {

    state: 'edit',

    onSetView: function(view) {
      //设置动作标题
      view.setVerbTitle('修改');
      view.load();
    },

    /**
     * 新建
     * 编辑状态下的新建为打开一个新的新建页面
     */
    createNew: function() {
      var view = this.view,
        routeData;

      if (!view) {
        return;
      }

      routeData = view.getRouteData();
      //路由数据
      routeData = {
        module: routeData.module,
        part: routeData.part,
        view: routeData.view,
        verb: 'Create'
      }
      //打开新页面
      view.appendPage(routeData);
    }
  });

  return verbStates;
});