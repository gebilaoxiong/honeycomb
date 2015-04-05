/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-17 14:55:30
 * @description
 */
define([
  'controls',
  'common/widget/form/ComboBox'
], function($, ComboBox) {
  var ComboGridBox,
    ListView = $.list.ListView;

  ComboGridBox = Q.Class.define(ComboBox, {

    type: 'ComboGridBox',

    /**
     * listView的列配置
     * @type {Array}
     *
     * [{
     *  header: '代码',
     *  width: .5,
     *  dataIndex: 'code'
     * }, {
     *  header: '名称',
     *  dataIndex: 'name'
     * }]
     */
    columns: undefined,

    selectedClass: 'x-list-selected',

    valueNotFoundText: '',

    //强制选择
    forceSelection: true,

    /**
     * 初始化view
     */
    initView: function() {
        var me = this;

        if (!me.view) {
          me.view = new ListView({
            applyTo: me.innerList,
            singleSelect: true,
            deferEmptyText: false,
            selectedClass: me.selectedClass,
            itemSelector: me.itemSelector || '.x-list-view-item',
            emptyText: me.listEmptyText,
            columns: me.columns
          });
        }
      }
      /*,
    
      restrictHeight: function() {
        var me = this;

        me.callParent(arguments);

        if (me.view) {
          me.view.setSize(me.innerList.width(), me.innerList.height());
        }
      }*/
  });

  return ComboGridBox;
});