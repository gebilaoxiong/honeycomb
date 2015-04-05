/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-07 18:48:42
 * @description 过滤面板构造者
 */
define([
  'common/builder/ModuleBuilder',
  'common/module/FilterModule'
], function(ModuleBuilder, FilterModule) {

  return ModuleBuilder.extend('Filter', {

    extendType: FilterModule,

    /**
     * 构造过滤字段
     * @param  {Object} overwrite
     * @param  {Object} meta
     * @return {Object}
     */
    buildFileds: function(overwrite, meta) {
      var fields = overwrite.fields = [],
        prop, i = 0;

      while (prop = meta.properties[i++]) {

        //允许过滤
        if (prop.filterable !== false &&
          'mapping' in prop &&
          'header' in prop) {

          fields.push({
            //测试模式使用name 在store进行本地排序
            fieldMapping: prop.mapping,
            fieldLable: prop.header,
            isDefaultFilter: prop.isDefaultFilter
          });
        }
      }
    },
    /**
     * 覆写buildMembers
     * @param  {object} overwrite 覆写对象
     * @param  {object} meta
     * @return {object}
     */
    buildMembers: function(overwrite, meta) {
      this.buildFileds(overwrite, meta);
    }
  });
});