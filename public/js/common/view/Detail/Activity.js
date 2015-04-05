/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-16 14:44:30
 * @description 明细视图活动
 */
define(['infrastructure/command/Activity'], function(Activity) {

  var DetailViewActivity;

  DetailViewActivity = Activity.define();

  /**
   * 请求数据
   * @param  {String}     id      记录唯一键
   */
  DetailViewActivity.defineGetAction('load',
    //success
    function(result, response) {
      var me = this;

      me.view.setValues(result.data);
    });


  DetailViewActivity.definePostAction('save',
    //success
    function(result, response) {
      var me = this;

      me.view.reload();

      //操作成功提示
      me.view.callViewport('alert', {
        type: 'info',
        isMini: true,
        message: '数据成功保存！'
      });
    });



  return DetailViewActivity;
})