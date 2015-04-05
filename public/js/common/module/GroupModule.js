/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-21 21:42:16
 * @description 类别模块 带有三个按钮（新增，编辑，删除）
 */

define([
  'infrastructure/module/TreeModule'
], function(TreeModule) {
  var GroupModule, tbar;

  /*工具栏*/
  tbar = [{
    text: '新增分组',
    handler: 'onAddBtnClickHandler'
  }, ' ', {
    text: '编辑分组',
    handler: 'onEditBtnClickHandler'
  }, ' ', {
    text: '删除分组',
    handler: 'onRemoveBtnClickHandler'
  }];

  /*类别模块*/
  GroupModule = Q.Class.define(TreeModule, {

    type:'GroupModule',

    tbar: tbar,

    onRender: function() {
      var me = this;

      me.callParent(arguments);
      me.el.addClass('x-category-tree');
    },

    /*三个按钮点击事件*/
    onAddBtnClickHandler: Q.noop,

    onEditBtnClickHandler: Q.noop,

    onRemoveBtnClickHandler: Q.noop
  });

  return GroupModule;
});