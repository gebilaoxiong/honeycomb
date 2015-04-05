/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-16 17:52:12
 * @description 查询窗口容器
 */
define(['infrastructure/viewport/ScriptWindow'], function(ScriptWindow) {
  var QueryWindow, tbar;

  /*工具栏*/
  tbar = [{
    text: '刷新'
  }, {
    text: '退出'
  },' ',{
    text: '返回数据'
  }]

  QueryWindow = Q.Class.define(ScriptWindow, {

    type: 'QueryWindow',

    defaults: {
      tbar: tbar,
      header: false
    }

  });

  return QueryWindow;
})