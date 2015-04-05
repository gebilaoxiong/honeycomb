/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-16 21:41:00
 * @description 载入数据
 */
define(['infrastructure/command/Command'], function(Command) {
  var LoadCommand;

  LoadCommand = Q.Class.define(Command, {
    /**
     * 需要载入记录的ID
     * @type {string}
     */
    recordId: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.load({
        recordId: me.recordId
      });
    }
  });

  return LoadCommand;
});