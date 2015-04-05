/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-17 16:47:41
 * @description 保存
 */
define(['infrastructure/command/Command'], function(Command) {
  var SaveCommand;

  SaveCommand = Q.Class.define(Command, {
    /**
     * 需要保存的记录
     * @type {Object}
     */
    record: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.save({
        record: me.record
      });
    }
  });

  return SaveCommand;
});