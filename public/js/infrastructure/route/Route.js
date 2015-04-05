/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-05 15:52:27
 * @description 路由
 *              负责匹配URL是否符合规则
 *              获取url中的参数信息
 */
define(function() {
  var Route,
    //参数（数字、大小写字母、下划线）
    rparam = '[0-9A-Za-z_]*',

    space = '(?:[\\s]+)?',

    search = '(?:\\?([\\s\\S]*))?$',

    /*预制命令(.为可选#Route属性)*/
    preCommand = Q.String.escapeRegExp('\\.#'),

    //命名参数
    rnamedParam = new RegExp('\\\\{([' + preCommand + ']+)?(' + rparam + ')\\\\}', 'g'),

    decodeURICmp = window.decodeURIComponent;

  Route = Q.Class.define({

    /*命名空间*/
    namespace: undefined,

    /*匹配的路径*/
    url: undefined,

    /*路径中参数的默认值*/
    defaults: undefined,

    /*路径中参数的限制*/
    constraints: undefined,

    /*URL匹配捕获正则*/
    matchRegExp: undefined,

    /**
     * 初始化函数
     */
    init: function(config) {
      var me = this;

      Q.extend(me, config);

      //url中的参数
      me.urlParams = [];


      me.matchRegExp = me.createMatcherRegex();
    },
    /**
     * 识别路径
     * @param  {String} 	url 	路径字符串
     */
    recognize: function(url) {
      var me = this,
        params, defaults, values,
        i, len, ret;

      if (values = url.match(me.matchRegExp)) {
        //返回值
        ret = {};

        //参数名数组
        params = me.urlParams;
        //参数值数组
        values = values.slice(1);
        //默认值
        defaults = me.defaults;

        for (i = 0, len = params.length; i < len; i++) {
          ret[params[i]] = decodeURICmp(values[i]);
        }

        //补充默认值
        if (me.defaults) {
          Q.each(me.defaults, function(key, defaultVal) {
            if (!ret[key] || !ret[key].length) {
              ret[key] = defaultVal;
            }
          });
        }

        return ret;
      }
      return false;
    },

    /*创建匹配正则*/
    createMatcherRegex: function() {
      var me = this,

        matcherSource = Q.String.escapeRegExp(me.url);

      //将URL转换为捕获正则
      matcherSource = matcherSource.replace(rnamedParam, function(_, preCommand, paramName) {
        var param = paramName;

        //限制 (constraints中的正则配置)
        param = me.constraints && me.constraints[param] ?
          me.constraints[param] : rparam;

        //如果有预置命令则处理之
        param = preCommand && preCommand.length ?
          me.processCommand(paramName, param, preCommand) :
          '(' + param + ')';

        //放入url参数中
        me.urlParams.push(paramName);

        return param;
      });

      return new RegExp('^' + matcherSource + search);
    },

    /**
     * 处理预置命令
     */
    processCommand: function(paramName, param, preCommand) {
      var ret = [];

      ret.push('(');

      //符号#为Route属性
      ret.push(preCommand.indexOf('#') >= 0 ? this[paramName] : param);

      ret.push(')');

      //符号.为可选
      if (preCommand.indexOf('.') >= 0) {
        ret.push('?');
      }

      ret = ret.join('');

      return ret;
    }
  });

  return Route;
});