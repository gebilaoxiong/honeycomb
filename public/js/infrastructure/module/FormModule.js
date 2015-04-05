/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-26 21:31:54
 * @description 表单模块
 */

define([
  'controls',
  'infrastructure/module/ModulePartial'
], function($, ModulePartial) {

  var FormModule = Q.Class.define($.form.Panel, ModulePartial, {
    type: 'FormModule',
    
    layout: 'table',

    /*disable的时候不显示遮罩*/
    maskDisabled: false,

    background: false,

    layoutConfig: {
      //默认分6列
      columns: 6
    },

    padding: '10px 0 10px 0',

    defaults: {
      cellCls: 'x-form-element x-input-cell'
    }
  });

  FormModule.prototype.defaultType = $.form.TextField;

  return FormModule;
});