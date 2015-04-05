/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-22 13:19:04
 * @description 视图命令抽象类
 */

define(function() {

	var Command;

	Command = Q.Class.define(Q.Abstract, {

		/*命令类型*/
		type: 'Command',

		isComm: true,

		/*视图操作*/
		activity: undefined,

		/**
		 * 初始化
		 * @param  {Object}      activity      		视图活动
		 * @param  {Object}      options     			选项
		 */
		init: function(activity, options) {
			var me = this;

			me.activity = activity;
			Q.extend(me, options);
		},

		/**
		 * 执行操作
		 */
		exec: Q.noop,

		destroy: function() {
			var me = this;
			me.activity = undefined;
		}
	});

	return Command;
})