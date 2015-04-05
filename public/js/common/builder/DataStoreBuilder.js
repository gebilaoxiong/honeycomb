/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-11 13:24:53
 * @description 构造Store类型的建造者  用作其他需要store的控件的基类
 */
define([
  'controls',
  'infrastructure/builder/BaseBuilder'
], function($, BaseBuilder) {

  return BaseBuilder.extend('data', {

    /*Store基类*/
    storeType: undefined,

    /**
     * 构建Store的成员
     * @param  {object} overwrite 覆写对象
     * @param  {object} meta
     * @return {object}
     */
    buildStoreMembers: function(overwrite, meta) {
      var storeOverwrite = overwrite.store = Q.extend({}, meta.store);

      storeOverwrite.xtype = this.storeType;
      storeOverwrite.fields = this.buildStoreFields(storeOverwrite, meta);
      storeOverwrite.recordType = this.buildStoreRecordType(storeOverwrite, meta);
    },
    /**
     * 构建Record的列
     * @param  {object} storeOverwrite store覆写对象
     * @param  {object} meta
     * @return {object}
     */
    buildFields: function(storeOverwrite, meta) {
      var prop, i = 0,
        fields = [];

      while (prop = meta.properties[i++]) {
        fields.push({
          name: prop.name,
          mapping: prop.mapping,
          type: prop.type,
          dateFormat: prop.dateFormat,
          useNull: prop.useNull
        });

        //主键
        if (prop.isIdentity) {
          storeOverwrite.idProperty = prop.mapping
        }

      }

      return fields;
    },


    /**
     * 如果没有指定recordType生成StoreFileds
     * @param  {[type]} storeOverwrite
     * @param  {[type]} meta
     * @return {[type]}
     */
    buildStoreFields: function(storeOverwrite, meta) {
      return meta.recordType ? undefined : this.buildFields(storeOverwrite, meta);
    },

    /**
     * 如果指定recordType了 构建Store的RecordType
     * @param  {[type]} storeOverwrite
     * @param  {[type]} meta
     * @return {[type]}
     */
    buildStoreRecordType: function(storeOverwrite, meta) {
      if (Q.isString(meta.recordType) && $.data.RecordManager.exsist(meta.recordType)) {
        return $.data.RecordManager.get(meta.recordType);
      } else if (meta.recordType) { //指定的recordType不存在
        return $.data.Record.create(meta.recordType, this.buildFields(storeOverwrite, meta));
      }
    }
  });
});