/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-11 13:11:41
 * @description ListView建造者
 */
define([
  'controls',
  'common/builder/DataStoreBuilder',
  'common/widget/store/MemoryJsonStore'
], function($, DataStoreBuilder, MemoryJsonStore) {

  return DataStoreBuilder.extend('listView', {

    extendType: $.list.ListView,

    storeType: MemoryJsonStore,

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
      overwrite.hideHeaders = meta.hideHeaders;
      overwrite.multiSelect = meta.multiSelect;
      overwrite.singleSelect = meta.singleSelect;
    },


    /**
     * 构建表格的列
     * @param  {[type]} overwrite
     * @param  {[type]} meta
     * @return {[type]}
     */
    buildColumns: function(overwrite, meta) {
      var prop, i = 0,
        columns = overwrite.columns = [];

      while (prop = meta.properties[i++]) {

        if (prop.isColumn !== false) {
          columns.push({
            header: prop.header,
            sortable: prop.sortable,
            resizable: prop.resizable,
            width: prop.width,
            dataIndex: prop.name,
            align: prop.align,
            xtype: prop.xtype
          });
        }
      }
    }
  });
});