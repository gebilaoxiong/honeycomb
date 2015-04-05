/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-15 22:45:09
 * @description 表单布局容器
 */
define(['controls'], function($) {
  var FormLayoutPanel;

  FormLayoutPanel = Q.Class.define($.Panel, {

    type: 'FormLayoutPanel',

    //布局
    layout: 'form',

    background: false,

    border: false,

    //子控件默认设置
    defaults: {
      background: false,
      border: false,
      width:180
    }
  });


  FormLayoutPanel.prototype.defaultType = $.form.TextField;

  return FormLayoutPanel;
})