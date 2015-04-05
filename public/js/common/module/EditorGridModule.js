/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-20 21:10:21
 * @description
 */
define([
  'controls',
  'infrastructure/module/EditorGridModule'
], function($, EditorGridModule) {

  var EditorGridModule2, tbar;

  tbar = [{
    text: '添加行',
    handler: 'onAddRowBtnClick'
  }, '-', {
    text: '删除行',
    handler: 'onRemoveRowBtnClick'
  }];


  EditorGridModule2 = Q.Class.define(EditorGridModule, {

    type: 'EditorGridModule2',

    stripeRows: true,

    autoHeight: true,

    tbar: tbar,

    toolbarSettings: {
      buttonSettings: {
        scale: 'small'
      }
    },

    configuration: function() {
      var me = this,
        columns;

      if (me.columns) {
        //复制一次数组 防止重复添加
        me.columns = me.columns.slice(0);
      } else {
        me.columns = [];
      }

      me.columns.unshift(new $.grid.RowNumberer());

      this.callParent(arguments);
    },

    /**
     * 添加行按钮点击事件处理函数
     */
    onAddRowBtnClick: Q.noop,


    /**
     * 删除行按钮点击事件处理函数
     */
    onRemoveRowBtnClick: Q.noop
  });

  return EditorGridModule2;
});