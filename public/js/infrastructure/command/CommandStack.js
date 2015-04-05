/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-22 17:04:38
 * @description 命令栈
 */
define(['controls'], function($) {

  var CommandStack;

  CommandStack = Q.Class.define($.util.Observable, {

    data: undefined,

    /**
     * 初始化
     */
    init: function(options) {
      var me = this;


      Q.extend(me, options);

      if (!me.data) {
        me.data = [];
      }

      me.callParent(arguments);
    },

    /**
     * 将命令插入到栈
     * @param  {Command}          command           命令实例
     */
    push: function(command) {
      var me = this;

      //如果已经析构直接返回不进行任何操作
      //或者不为command实例
      if (me.isDestroyed || !command.isComm) {
        return;
      }

      me.data.push(command);
      me.fire('stackchange', me);
    },

    /**
     * 弹出栈中的命令
     * @return {Command}          命令实例
     */
    pop: function() {
      var me = this,
        command;

      //如果已经析构直接返回不进行任何操作
      if (me.isDestroyed) {
        return;
      }

      if (command = me.data.pop()) {
        me.fire('stackchange', me);
      }

      return command;
    },

    /**
     * 是否为空
     */
    isEmpty: function() {
      return me.isDestroyed || me.data.length > 0;
    },

    destroy: function() {
      var me = this;

      me.callParent(arguments);
      Q.destroy(me.data);
      me.data = undefined;
      me.isDestroyed = true;
    }
  });

  return CommandStack;
})