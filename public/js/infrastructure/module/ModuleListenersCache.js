/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-18 21:55:47
 * @description 存储在模块中注册的（子模块|子控件）事件
 *
 * 添加模块的时候我们根据别名恢复其在模块中绑定的事件
 * 移除模块的时候我们根据别名移除其在模块中绑定的事件
 *
 *
 * cache结构
 *
 * {
 * 		cmp1:{
 * 			click:[{
				scope: object
				handler: handler
			},{
				scope: object
				handler: handler
			}...],
			rowclick:[{
				scope: object
				handler: handler
			},{
				scope: object
				handler: handler
			}...]
 * 		},
 * 		cmp2:{
 * 			click:[{
				scope: object
				handler: handler
			},{
				scope: object
				handler: handler
			}...]
 * 		}
 * }
 */
define(function() {
  var ModuleListenersCache;

  ModuleListenersCache = Q.Class.define({

    type: 'ModuleListenersCache',

    isDestroyed: false, //是否完成析构

    init: function() {
      this.cache = {};
    },

    /**
     * 添加事件
     * @param {String} alias 	  控件别名
     * @param {Object} listeners  事件对象
     *
     * listeners:{
     * 	'rowclick':'onGridRowClick',
     * 	'rowdbclick':me.onGridRowDbClick
     * }
     *
     * 1. listenersCache.add('grid',{
     * 		'rowclick':'onGridRowClick',
     * 	 	'rowdbclick':me.onGridRowDbClick
     * })
     *
     * 2. listenersCache.add({
     * 		'grid':{
     * 			'rowclick':'onGridRowClick',
     * 	 		'rowdbclick':me.onGridRowDbClick
     *     	},
     *
     * 		'comboBox':{
     * 			'change':'onComboBoxValueChange'
     * 		}
     * })
     */
    add: function(alias, listeners) {
      var cache = this.cache,
        eventName, i;

      if (!alias || this.isDestroyed) {
        return;
      }

      /*如果alias为一个对象（法2添加方法）*/
      if (Q.isObject(alias)) {
        for (i in alias) {
          arguments.callee.call(this, i, alias[i]);
        }
        return;
      }

      //如果别名还没有注册 
      if (!(alias in cache)) {
        cache[alias] = {};
      }

      cache = cache[alias];

      //遍历listeners
      for (eventName in listeners) {
        //非函数跳过 （scope这些玩意）
        if (typeof listeners[eventName] != 'function') {
          continue;
        }

        //如果该事件之前未注册
        if (cache[eventName] == undefined) {
          cache[eventName] = [];
        }

        //有则加
        if (listeners[eventName]) {
          cache[eventName].push({
            //缓存scope和处理函数
            scope: listeners.scope,
            handler: listeners[eventName]
          });
        }
      }
    },

    /**
     * 是否包含某个子模块的监听事件
     * @param {String} alias 	  控件别名
     */
    contains: function(alias) {
      return !!this.cache[alias];
    },

    /**
     * 获取通过Module绑定在（子模块|子控件）上的事件
     * @param {String} alias 	  控件别名
     */
    get: function(alias) {
      return this.cache[alias];
    },

    /**
     * 将缓存中的监听事件绑定在控件上
     * @param  {Component} cmp 控件
     */
    bind: function(cmp) {
      if (cmp.alias && this.cache[cmp.alias]) {
        operatComponentListeners.call(this, 'bind', cmp);
      }
    },


    /**
     * 将缓存中的监听事件从控件上解除
     * @param  {Component} cmp 控件
     */
    unbind: function(cmp) {
      if (cmp.alias && this.cache[cmp.alias]) {
        operatComponentListeners.call(this, 'unbind', cmp);
      }
    },


    /**
     * 你懂的
     */
    each: function(iterator, scope) {
      var cache = this.cache,
        alias, eventName, i,
        item, listenerArray;

      for (alias in cache) { //取得某一个控件的缓存

        for (eventName in cache[alias]) { //取得某一事件的缓存

          //监听事件处理函数的数组
          listenerArray = cache[alias][eventName];
          i = 0;

          while (item = listenerArray[i++]) { //迭代改记录下的所有处理函数
            iterator.call(scope || cache, alias, eventName, item);
          }

        }
      }
    },

    /**
     * 析构
     */
    destroy: function() {
      var me = this;

      if (me.isDestroyed) {
        return;
      }

      me.cache = null;
      me.isDestroyed = true;
    }
  });

  /**
   *
   * @param  {[type]} operation [description]
   * @param  {[type]} cmp       [description]
   * @return {[type]}           [description]
   */
  function operatComponentListeners(operation, cmp) {
    var me = this,
      cach = this.cach,
      cmpCache, event, i, listeners;

    //如果在缓存中不存在就算了
    if (!(cmpCache = me.cache[cmp.alias])) {
      return;
    }

    for (event in cmpCache) {
      i = 0;
      while (listeners = cmpCache[event][i++]) {
        cmp[operation](event, listeners.handler, listeners.scope);
      }
    }
  }

  return ModuleListenersCache;
})