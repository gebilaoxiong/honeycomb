/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-08 23:15:33
 * @description 路径映射  routeData => Path
 */
define(function() {
  var RouteDataMapper,

    numberType = 'number',

    objectType = 'object',

    initVernier = -1;

  RouteDataMapper = Q.Class.define({

    /*文件夹名称*/
    dir: '',

    /*路径格式*/
    format: undefined,

    /*转换历史*/
    history: undefined,

    /*游标*/
    vernier: initVernier,

    init: function(config) {
      var me = this;

      Q.extend(me, config);

      me.history = [];

      if (me.format && Q.isString(me.format)) {
        //名键值格式化
        me.format = Q.String.format(me.format, true);
      }
    },

    /**
     * 映射操作
     * @param  {undefined||Number||Object} 		routeData        当前游标值对应的routeData||
     *                                                         当前有标志+number对应的routeData||
     *                                                         路由数据
     * @param  {Boolean}                      clearAfter       是否清空游标后的记录
     *
     *
     * 
     * 1.routeDataMapper.map();                                映射前一次操作的routeData
     *                                                         调整游标到相应位置	不产生映射记录
     *
     * 2.routeDataMapper.map(-2);			                         映射前两次操作的routeData
     *                                                         调整游标到相应位置	不产生映射记录
     *
     * 3.routeDataMapper.map(object);	                         将object进行映射
     *                                                         游标位置+1	产生映射记录
     *
     * 4.routeDataMapper.map(-2,true);                         映射前两次操作的routeData
     *                                                         清空其后的映射记录
     *
     * 5.routeDataMapper.map(object,true);		                 映射object
     *                                                         清空其后的映射记录
     */
    map: function(routeData, clearAfter) {
      var me = this,
        vernier = me.vernier,
        path, routeDataType, ret;

      //类型判断
      routeDataType = Q.type(routeData);

      //如果传入的是数字 那么为游标的方向值
      if (routeDataType === numberType) {
        //限制游标范围
        me.vernier = Q.Number.constrain(
          vernier + routeDataType,
          initVernier,
          me.history.length - 1);

        routeData = undefined;
      }

      //如果routeData的是空值 那么路由数据为游标指向的routeData
      if (routeData == undefined) {
        if ((routeData = me.history[me.vernier]) == undefined) {
          //恢复游标
          me.vernier = vernier;
          return;
        }
      }

      //如果为routeData
      if (routeDataType === objectType) {
        me.vernier += 1;
        me.history[me.vernier] = routeData;
      }

      //如果是替换操作
      //清空游标后的历史
      if (clearAfter) {
        me.history.length = me.vernier + 1;
      }

      ret = me.format(routeData);

      ret = Q.String.isEmpty(me.dir) ? ret : me.dir + '/' + ret;

      GLOBAL.logInfo('RouteDataMapper 路由数据映射 ( routeData => path ): ', ret)

      return ret;
    },

    destroy: function() {
      this.format = null;
    }
  });

  return RouteDataMapper;
});