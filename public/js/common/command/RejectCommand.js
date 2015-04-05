/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-04 20:50:51
 * @description 反审核
 */
define(['infrastructure/command/Command'], function(Command) {
  var RejectCommand;

  RejectCommand = Q.Class.define(Command, {
    /**
     * 反审核记录的ID数组
     * @type {Array}
     */
    idArray: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.reject({
        idArray: me.idArray
      });
    }
  });

  return RejectCommand;
});