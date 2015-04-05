/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-25 00:38:02
 * @description 路由器配置文件
 */
var express_mvc = require('express-mvc'),
  ControllerFactory = express_mvc.ControllerFactory;


module.exports.init = function(application) {
  var format = '{area}/{controller}';

  /**
   * 注册由controllerFactory处理的路由规则
   */
  new ControllerFactory({
    root: __dirname
  })

  //根目录
  .register(application, '/', {
    //路由默认值
    defaults: {
      area: 'Default',
      controller: 'Home',
      action: 'index'
    },
    pathFormat: format
  })

  /*其他路由规则*/
  //Home/index
  .register(application, '/:controller/:action', {
    //路由默认值
    defaults: {
      area: 'Default'
    },
    pathFormat: format
  })

  //Default/Home/index
  //此处的 dir controllerProp actionProp都为ControllerFactory的默认值
  //只是为了演示配置
  .register(application, '/:area/:controller/:action', {
    dir: 'controllers',
    controllerProp: 'controller',
    actionProp: 'action',
    pathFormat: format
  })


  //Default/User/remove/1
  .register(application, '/:area/:controller/:action/:id', {
    pathFormat: format
  });

}