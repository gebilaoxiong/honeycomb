/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-04 13:27:52
 * @description 批准
 */

define(['infrastructure/command/Command'], function(Command) {
  var ConsentCommand;

  ConsentCommand = Q.Class.define(Command, {
    /**
     * 批准记录的ID数组
     * @type {Array}
     */
    idArray: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.consent({
        idArray: me.idArray
      });
    }
  });

  return ConsentCommand;
});