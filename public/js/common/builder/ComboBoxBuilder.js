/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-02-01 03:17:29
 * @description
 */

define([
  'common/builder/DataStoreBuilder',
  'common/widget/store/HttpJsonStore',
  'common/widget/form/ComboBox'
], function(DataStoreBuilder, HttpJsonStore, ComboBox) {
  var ComboBoxBuilder;

  ComboBoxBuilder = DataStoreBuilder.extend('widget.combo', {

    extendType: ComboBox,

    storeType: HttpJsonStore,

    recordTypeName: 'CommonComboBoxRecordType',

    recordProperties: [{
      name: 'id',
      mapping: 'id',
      type: 'string'
    }, {
      name: 'text',
      mapping: 'text',
      type: 'string'
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
    },

    /**
     * 构造ComboBox成员
     * @param  {object}             overwrite             覆写对象
     * @param  {object}             meta
     * @return {object}
     */
    buildComboBoxMember: function(overwrite, meta) {
      Q.extend(overwrite, meta);
    },

    /**
     * 重写构建Store的成员
     * @param  {object}             overwrite             覆写对象
     * @param  {object}             meta
     * @return {object}
     */
    buildStoreMembers: function(overwrite, meta) {
      var storeOverwrite = overwrite.store = Q.extend({}, meta.store);

      //重写类型名称
      storeOverwrite.xtype = this.storeType;

      if (!meta.properties) {
        meta.properties = meta.recordProperties || this.recordProperties;

        if (meta.recordProperties) {
          delete meta.recordProperties;
        }

      }

      //recordTypeName
      if (!meta.recordType) {
        meta.recordType = meta.recordTypeName || this.recordTypeName;
      }


      storeOverwrite.fields = this.buildStoreFields(storeOverwrite, meta);
      storeOverwrite.recordType = this.buildStoreRecordType(storeOverwrite, meta);
    }
  });

  ComboBoxBuilder.ns = 'widget.combo';

  return ComboBoxBuilder;
});