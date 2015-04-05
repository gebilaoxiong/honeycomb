/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-01 16:13:57
 * @description 所有GridModule构造器的基类
 */
define([
  'controls',
  'common/widget/grid/LinkColumn',
  'common/builder/DataStoreBuilder'
], function($, _, DataStoreBuilder) {

  var toobars = ['tbar', 'bbar', 'fbar'],

    GridModuleBuilder;

  GridModuleBuilder = DataStoreBuilder.extend('grid', {
    /**
     * 覆写buildMembers
     * @param  {object} overwrite 覆写对象
     * @param  {object} meta
     * @return {object}
     */
    buildMembers: function(overwrite, meta) {
      this.buildAttributes(overwrite, meta);
      this.buildStoreMembers(overwrite, meta);
      this.buildColumns(overwrite, meta);
    },

    /**
     * 构建表格属性
     * @param  {[type]} overwrite
     * @param  {[type]} meta
     * @return {[type]}
     */
    buildAttributes: function(overwrite, meta) {
      //工具栏
      Q.each(toobars, function(_, prop) {
        if (prop in meta) {
          overwrite[prop] = meta[prop];
        }
      });

      overwrite.viewConfig = meta.viewConfig;
    },


    /**
     * 构建表格的列
     * @param  {[type]} overwrite
     * @param  {[type]} meta
     * @return {[type]}
     */
    buildColumns: function(overwrite, meta) {
      var prop, i = 0,
        columns = overwrite.columns = [],
        columnMeta;

      while (prop = meta.properties[i++]) {

        if (prop.isColumn !== false) {

          columnMeta = {
            header: prop.header,
            sortable: prop.sortable !== false,
            resizable: prop.resizable,
            width: prop.width || 100,
            dataIndex: prop.name,
            xtype: prop.xtype,
            editable: prop.editable,
            editor: prop.editor,
            align: prop.align
          };

          //格式
          if ('format' in prop) {
            columnMeta.format = prop.format;
          }

          //呈现
          if ('renderer' in prop) {
            columnMeta.renderer = prop.renderer
          }

          columns.push(columnMeta);
        }
      }
    }
  });

  GridModuleBuilder.ns = 'module.grid'

  return GridModuleBuilder;
});