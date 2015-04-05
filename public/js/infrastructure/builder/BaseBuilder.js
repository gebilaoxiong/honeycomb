/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-01 15:18:59
 * @description 建造者父类 子类必须实现方法class::construct(typeName, meta)
 */
define(function() {
  /*类型缓存*/
  var typeCache = {};

  return {

    /**
     * 建造者扩展的基类
     */
    extendType: undefined,

    /**
     *
     * 扩展原有Builder
     * @param  {string} builderName 新建造者的名称
     * @param  {Object} overwrite 新建造者的成员
     * @return {Builder}
     */
    extend: function(builderName, overwrite) {
      return Q.extend({}, this, {
        ns: (this.ns ? this.ns.toLowerCase() + '.' : '') + builderName
      }, overwrite);
    },

    /**
     * 输出类型
     * @param  {string} typeName 类型名称
     * @param  {object} meta
     */
    generate: function(meta, extendType) {
      var typeName = meta.type,
        overwrite, ret,
        startTime = new Date();

      if (!typeName) {
        throw '元数据未定义名称!';
      }

      // 如果不在缓存中 调用构造方法 并缓存
      if (!(ret = this.cache(this.ns + '.' + typeName))) {

        GLOBAL.logBuildingProcess && GLOBAL.logDebug(typeName, ' 开始构造 建造者:', this.ns);

        overwrite = {
          type: typeName
        };

        this.buildMembers.call(this, overwrite, meta);
        ret = this.construct(overwrite, extendType);

        GLOBAL.logBuildingProcess && GLOBAL.logDebug(typeName, ' 构造完毕! 耗时:', (new Date() - startTime), '毫秒');
      }

      return ret;
    },

    /**
     * 构造一个新的类型
     * @param  {Object} overwrite 新类型的成员
     */
    construct: function(overwrite, extendType) {
      var me = this,
        ret = Q.Class.define(extendType || me.extendType, overwrite),
        typeName = ret.prototype.type;

      if (me.enableCache !== false) {
        //缓存之
        me.cache(me.ns + '.' + typeName, ret);
      }

      return ret;
    },


    /**
     * 类型缓存
     * @param  {string} typeName
     * @param  {class} type
     */
    cache: function(typeName, type) {

      if (arguments.length == 2) { //seter

        if (type == undefined) {
          throw '建造者:{' + this.ns + '}，类型<' + typeName + '> 类型不存在 无法缓存';
        }

        typeCache[typeName] = type;

      } else { //geter
        return typeCache[typeName];
      }

    }
  };
})