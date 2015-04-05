/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-05 21:44:35
 * @description 路由器测试
 */
define(['infrastructure/route/Router'], function(Router) {

  var router = new Router();

  router.register('default', 'Honeycomb{pageId}/{#namespace}/{controller}/{.action}', {
    //默认值
    defaults: {
      controller: 'Home',
      action: 'List'
    },
    //规则限制
    constraints: {
      pageId: '[0-9]*'
    },
    //命名空间
    namespace: 'default'
  });

  router.bind('intercept', function(e, route, args) {
    alert(args.pageId)
  });


  router.initialize()

})