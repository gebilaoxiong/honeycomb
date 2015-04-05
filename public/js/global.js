/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-07 02:44:32
 * @description 全局设置
 */

/*----------------------------全局配置--------------------------------*/
! function(window) {
  var global,
    core_slice = Array.prototype.slice,
    core_join = Array.prototype.join,
    emptyStr = '',
    noop, console, errorHandingHooks,
    judgeLog, logLevels, level, i;


  window.GLOBAL = global = {

    /**
     * 是否打印构造过程
     */
    logBuildingProcess: false,

    /*
			异常处理机制
			log    	打印异常
			remote	传送至服务器
		*/
    errorHandlingMode: 'default'
  };

  noop = function() {};


  /*------------------------异常处理------------------------*/
  /**
   * 全局处理
   */
  window.onerror = function(msg, path, line) {
    return global.errorHandingHooks[global.errorHandlingMode || 'default'](msg, path, line);
  };

  /*异常处理方法*/
  global.errorHandingHooks = {

    /*默认处理 抛出异常*/
    'default': function() {
      return false;
    },

    /*打印*/
    'log': function(msg, path, line) {
      var message = [
        '\n',
        '信息:', msg, '\n',
        '路径:', path, '\n',
        '行号:', line
      ];

      global.logError(message.join(emptyStr));
      return true;
    },

    /*发送至服务器*/
    'remote': noop
  };


  /*------------------------信息打印------------------------*/
  console = window.console;

  //判定浏览器对打印的支持
  judgeLog = console && !!console.log;

  /*打印等级*/
  logLevels = [{
    name: 'debug',
    style: ''
  }, {
    name: 'info',
    style: 'background:#d9edf7;color:#31708f;'
  }, {
    name: 'warning',
    style: 'background:#fcf8e3;color:#8a6d3b;'
  }, {
    name: 'error',
    style: 'background:#f2dede;color:#a94442;'
  }];

  /**
   * 将信息打印到控制台
   * @param  {string} 	msg   			打印的信息
   * @param  {string} 	level 			等级
   *                  	0:debug  		调试信息
   *                  	1:info 			一般信息
   *                 	 	2:warning		警告
   *                	   	3:error 		异常
   */
  global.log = judgeLog ? function(msg, level) {
    var style;

    level = logLevels[level == undefined ? 0 : level];

    if (level == undefined || level.disabled) {
      return;
    }

    style = level.style;

    //拼接信息
    msg = [
      '<', level.name, '> ', //log类型名称
      Q.Date.format(new Date(), 'hh:mm:ss'), //时间
      ': ', msg //信息
    ].join(emptyStr);

    //打印
    style ? console.log('%c' + msg, style) : console.log(msg);

  } : noop;


  i = 0;
  while (level = logLevels[i++]) {
    var methodName = level.name;

    //方法名称 logDebug
    methodName = [
      'log',
      methodName.slice(0, 1).toUpperCase(),
      methodName.substring(1)
    ].join(emptyStr);

    //将方法附加到global上
    //打印为常用功能
    //所以命名空间不能埋太深
    global[methodName] = (function(l) {

      return function() {
        var message = core_join.call(arguments, emptyStr);
        global.log(message, l);
      };

    })(i - 1);
  }


}(window);