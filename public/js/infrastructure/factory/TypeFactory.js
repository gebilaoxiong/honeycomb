/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-20 15:45:03
 * @description 类型定义工厂
 *              负责调用建造者 建造一系列类型
 */
define(function() {
  var TypeFactory;

  TypeFactory = Q.Class.define({

    init: function(builderArray) {
      var me = this;
      /**
       * 建造者缓存
       */
      me.buildersCache = {};

      if (builderArray) {
        me.extendBuilderCache(builderArray);
      }
    },
    /**
     * 通过Builder的数组扩充建造者缓存
     * @param  {Builder[]} builderArray Builder的数组
     */
    extendBuilderCache: function(builderArray) {
      var me = this,
        builder,
        i = 0,
        fullName;

      /*将所有建造者装入缓存中*/
      while (builder = builderArray[i++]) {
        fullName = builder.ns;

        //名称已存在 则抛出异常
        if (fullName in me.buildersCache) {
          throw '模块建造者:' + fullName + '已存在！请重新命名';
        }
        me.buildersCache[fullName] = builder;
      }

      return me;
    },
    /**
     * 根据元数据创建一个类型
     * @param  {string} builderFullName 调用构造者的全程
     * @param  {object} meta        	元数据
     * @param  {bool} 			 		是否是复合类型
     * @return {type}             		新的类型
     *
     * 复合类型的meta
     * 		{
     * 			xxxx:xxx,
     * 			yyy:yyy,
     * 			items:[{
     * 				builder:'data.grid.Paging',
     * 				isComposite:false,
     * 				meta:{....}
     * 			}]
     * 		}
     */
    create: function(builderFullName, meta, isComposite) {
      var me = this,
        builder, ret, item,
        i;

      //如果没有找到建造者 抛出异常
      if (!(builder = me.buildersCache[builderFullName])) {
        throw '建造者:' + builderFullName + ' 在缓存中不存在!';
      }

      if (!isComposite) { //非复合类型

        ret = builder.generate(meta);

      } else { //复合类型

        i = 0;
        //迭代子类元数据 如果为元数据 将其转换为类型
        while (item = meta.items[i++]) {
          if (item.meta && item.builder) {
            meta.items[i - 1] = {
              xtype: arguments.callee.call(me,
                item.builder,
                item.meta,
                item.isComposite)
            };

            /*别名*/
            if (item.alias) {
              meta.items[i - 1].alias = item.alias;
            }
          }
        }

        //创建类型
        ret = builder.generate(meta);
      }

      return ret;
    }
  });

  return TypeFactory;
});