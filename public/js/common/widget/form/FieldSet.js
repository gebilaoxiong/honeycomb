/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-10 00:10:19
 * @description
 */
define(['controls'], function($) {

  var FieldSet;

  FieldSet = Q.Class.define($.form.FieldSet, {

    type: 'FormFieldSet',

    background: false,

    border: false,

    //子控件默认设置
    defaults: {
      background: false,
      border: false,
      width: 180
    }
  });

  return FieldSet;
})