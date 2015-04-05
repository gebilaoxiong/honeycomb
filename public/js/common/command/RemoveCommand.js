/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-28 13:59:55
 * @description 删除命令
 */
define(['infrastructure/command/Command'], function(Command) {

  var RemoveCommand;

  RemoveCommand = Q.Class.define(Command, {

    /**
     * 需要删除的记录
     * @type {Array}
     */
    idArray: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.remove({
        idArray: me.idArray
      });
    },

    /*取消*/
    undo: function() {
      var me = this;
      return me.activity.recycle({
        idArray: me.idArray
      });
    }

  });

  return RemoveCommand;
})