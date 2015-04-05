/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-28 22:08:35
 * @description  列表视图活动
 */
define(['infrastructure/command/Activity'], function(Activity) {

  var ListViewActivity;

  ListViewActivity = Activity.define();


  /**
   * 删除数据
   * @param  {Object}     params    参数
   */
  ListViewActivity.definePostAction('remove',
    //success
    function() {
      var me = this;

      me.view.reload();

      //操作成功
      //询问是否测撤销
      me.view.callViewport('alert', {
        type: 'info',
        isMini: true,
        message: '数据已成功删除！',
        buttons: {
          'ok': '确认删除',
          'cancel': '撤销删除'
        },
        handler: function(result) {
          //如果是撤销 调用视图的undo
          result === 'cancel' && me.view.undo();
        }
      });

    });

  /**
   * 恢复删除的数据
   */
  ListViewActivity.definePostAction('recycle', function() {
    //刷新视图
    this.view.reload();
  });

  /**
   * 提交
   */
  ListViewActivity.definePostAction('audit', function(result) {
    var me = this;

    me.view.reload();

    me.view.callViewport('alert', {
      type: 'info',
      title: '操作信息：',
      message: result.message || '提交成功！'
    });
  });

  /**
   * 撤销提交
   */
  ListViewActivity.definePostAction('cancel', function(result) {
    var me = this;

    me.view.reload();

    me.view.callViewport('alert', {
      type: 'info',
      title: '操作信息：',
      message: result.message || '撤销成功！'
    });
  });


  /**
   * 审批通过
   */
  ListViewActivity.definePostAction('consent', function(result) {
    var me = this;

    me.view.reload();

    me.view.callViewport('alert', {
      type: 'info',
      title: '操作信息：',
      message: result.message || '审核成功！'
    });
  });

  /**
   * 反审核
   */
  ListViewActivity.definePostAction('reject', function(result) {
    var me = this;

    me.view.reload();

    me.view.callViewport('alert', {
      type: 'info',
      title: '操作信息：',
      message: result.message || '反审核成功！'
    });
  });

  return ListViewActivity;
});