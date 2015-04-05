/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-04 21:17:43
 * @description 撤销批准
 */
define(['infrastructure/command/Command'], function(Command) {
  var CancelCommand;

  CancelCommand = Q.Class.define(Command, {
    /**
     * 撤销批准记录的ID数组
     * @type {Array}
     */
    idArray: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.cancel({
        idArray: me.idArray
      });
    }
  });

  return CancelCommand;
});