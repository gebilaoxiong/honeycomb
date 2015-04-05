/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-17 22:16:09
 * @description 查询框建造者
 */
define([
  'common/builder/ComboBoxBuilder',
  'common/widget/form/SearchComboBox'
], function(ComboBoxBuilder, SearchComboBox) {
  var SearchComboBoxBuilder;

  SearchComboBoxBuilder = ComboBoxBuilder.extend('widget.serchCombo', {

    extendType: SearchComboBox,

    recordTypeName: 'CommonSearchComboBoxRecordType',

    recordProperties: [{
      name: 'id',
      mapping: 'id',
      type: 'string',

      /*是否生成列*/
      isColumn: false
    }, {
      name: 'code',
      mapping: 'code',
      type: 'string',

      /*列配置*/
      header: '代码',
      width: .5
    }, {
      name: 'name',
      mapping: 'name',
      type: 'string',

      /*列配置*/
      header: '名称'
    }],

    /**
     * 重写构建成员
     * @param  {object}             overwrite             覆写对象
     * @param  {object}             meta
     * @return {object}
     */
    buildMembers: function(overwrite, meta) {
      this.buildComboBoxMember(overwrite, meta);
      this.buildStoreMembers(overwrite, meta);
      this.buildColumns(overwrite, meta);
    },

    /**
     * 重写构建ListView的列
     * @param  {object}             overwrite             覆写对象
     * @param  {object}             meta
     * @return {object}
     */
    buildColumns: function(overwrite, meta) {
      var prop, i = 0,
        columns = overwrite.columns = [],
        columnMeta;

      while (prop = meta.properties[i++]) {

        if (prop.isColumn === false) {
          continue;
        }

        columns.push({
          header: prop.header,
          width: prop.width,
          dataIndex: prop.name
        });
      }
    }
  });

  SearchComboBoxBuilder.ns = 'widget.searchCombo';

  return SearchComboBoxBuilder;
});