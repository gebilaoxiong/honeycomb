/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-04 10:54:03
 * @description 送审
 */
define(['infrastructure/command/Command'], function(Command) {
  var AuditCommand;

  AuditCommand = Q.Class.define(Command, {
    /**
     * 送审记录的ID数组
     * @type {Array}
     */
    idArray: undefined,

    /*执行*/
    exec: function() {
      var me = this;

      return me.activity.audit({
        idArray: me.idArray
      });
    }
  });

  return AuditCommand;
});