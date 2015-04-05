/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-01 16:48:05
 * @description
 */
define([
  'controls',
  'common/builder/ModuleBuilder',
  'infrastructure/module/FormModule',
  'common/widget/form/SearchComboBox',
], function($, ModuleBuilder, FormModule, SearchComboBox) {

  var labelCls = 'x-form-label',

    labelCellCls = 'x-label-cell';

  return ModuleBuilder.extend('Form', {

    extendType: FormModule,

    /**
     * 构建表单的字段
     * @param  {object} overwrite
     * @param  {object} meta
     */
    buildFileds: function(overwrite, meta) {
      var items = overwrite.items = [],
        metaItems = meta.items || [],
        field, i;

      i = 0;
      while (field = metaItems[i++]) {

        //如果没有设置别名 就用name代替
        if (field.alias == undefined) {
          field.alias = field.name;
        }

        //如果有fieldLable 生成标签
        if (field.fieldLabel != undefined) {
          //label
          items.push({
            alias: field.alias + 'Lable',
            xtype: $.form.Label,
            cls: labelCls,
            cellCls: labelCellCls,
            text: field.fieldLabel,
            rowspan: field.rowspan,
            colspan: field.colspan
          });
        }

        //field
        if (Q.isString(field.xtype)) {
          field.xtype = $.form[field.xtype];
        }
        items.push(field);
      }
    },

    /**
     * 覆写buildMembers
     * @param  {object} overwrite 覆写对象
     * @param  {object} meta
     * @return {object}
     */
    buildMembers: function(overwrite, meta) {
      Q.extend(overwrite, meta);
      this.buildFileds(overwrite, meta);
    }
  });

})