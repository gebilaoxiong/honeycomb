/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-20 21:10:21
 * @description 可编辑表格
 */
define([
  'controls',
  'infrastructure/module/ModulePartial',
  'infrastructure/module/GridModulePartial'
], function($, ModulePartial, GridModulePartial) {

  return Q.Class.define($.grid.EditorPanel, ModulePartial, GridModulePartial, {
    type: 'EditorGridPanelModule',


    /*重写编辑结束操作，用于支持SearchComboBox 返回的值*/
    onEditComplete: function(e, editor, value, startValue) {
      var me = this,
        field, record, fieldName,
        eventObject, isEqual;

      me.editing = false;
      me.lastActiveEditor = me.activeEditor;
      me.activeEditor = null;

      record = editor.record;
      fieldName = me.colModel.getDataIndex(editor.col);
      field = editor.field;
      delete editor.ownerCt;

      value = me.postEditValue(value, startValue, record, fieldName);

      //如果值为对象
      //比较两对象是否相等
      isEqual = Q.isObject(value) ?
        Q.Object.equals(value, startValue) :
        String(value) === String(startValue);

      if (me.forceValidation === true || !isEqual) {
        eventObject = {
          grid: me,
          record: record,
          fieldName: fieldName,
          originalValue: startValue,
          value: value,
          row: editor.row,
          column: editor.col,
          cancel: false
        };
        if (me.fire("validateedit", eventObject) !== false && !eventObject.cancel && !isEqual) {
          record.set(fieldName, eventObject.value);
          delete eventObject.cancel;
          me.fire("afteredit", eventObject);
        }
      }

      me.view.focusCell(editor.row, editor.col);
    },
  });
})