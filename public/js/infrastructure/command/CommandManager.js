/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-22 13:18:11
 * @description 视图命令管理器
 *              我们将视图的 “Command” 与 “Query”分离
 *              在命令部分实现redo\undo操作
 */
define([
  'controls',
  'infrastructure/command/CommandStack'
], function($, CommandStack) {

  var CommandManager;

  CommandManager = Q.Class.define($.util.Observable, {
    /**
     * 命令的重新执行栈
     * @type {[type]}
     */
    redoStack: undefined,

    /**
     * 命令的取消执行栈
     * @type {[type]}
     */
    undoStack: undefined,

    init: function() {
      var me = this,

        stackOpts = {
          scope: me,
          stackchange: me.onCommandStackDataChange
        };

      /**
       * 重做栈
       */
      me.redoStack = new CommandStack(stackOpts);
      /**
       * 取消栈
       */
      me.undoStack = new CommandStack(stackOpts);
    },

    /**
     * 执行命令
     * @param  {Command}    command     命令实例
     */
    exec: function(command) {
      var me = this;

      //成功执行
      //且有undo接口才放入取消队列
      if (command.exec() && command.undo) {
        me.undoStack.push(command);
      }
    },

    /**
     * 是否能够恢复
     */
    canRedo: function() {
      return !this.redoStack.isEmpty();
    },

    /**
     * 恢复
     */
    redo: function() {
      var me = this,
        command;

      if (command = me.redoStack.pop()) {
        command.exec();
        me.undoStack.push(command);
      }
    },

    /**
     * 是否能够取消
     */
    canUndo: function() {
      return !this.undoStack.isEmpty();
    },

    /**
     * 撤销
     * 取消上次对视图进行的变更 将视图状态恢复到变更前
     */
    undo: function() {
      var me = this,
        command;

      if ((command = me.undoStack.pop()) && command.undo()) {
        me.redoStack.push(command);
      }
    },

    /**
     * 栈的数据发生变更处理函数
     */
    onCommandStackDataChange: function() {
      var me = this;

      me.fire('commandstatechange', me);
    },

    destroy: function() {
      var me = this;

      me.callParent(arguments);
      Q.destroy(me.redoStack, me.undoStack);
    }
  });

  return CommandManager;
})