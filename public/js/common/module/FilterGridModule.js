/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-20 15:12:36
 * @description 锚点布局的 带有过滤面板 和表格的模块
 *
 * 冒泡事件
 *
 * gridrowactivated    表格行激活
 * @param  {FilterGridModule} filterGridModule  		当前模块
 * @param  {Record} record  							选中的记录
 */

define([
  'infrastructure/module/PanelModule'
], function(PanelModule) {

  var FilterGridModule, proto;

  proto = {

    type: 'FilterGridModule',

    layout: 'anchor',

    background: false,

    /*与子模块关系描述*/
    cmpEvents: {
      'filterPanel': {
        'search': 'onFilterPanelSearch'
      },
      'gridPanel': {
        'rowdblclick': 'onGridRowActivated',
        'linkcolumnclick': 'onGridRowActivated'
      }
    },

    cmpDefaults: {
      'filterPanel': {
        width: 480,
        height: 55,
        margin: '0 0 0 20px'
      },
      'gridPanel': {
        anchor: '100% -55',
        padding: '0 0 0 20px'
      }
    },

    /**
     * gridPanel行激活事件处理函数
     * @param  {EventObject} e     		事件对象
     * @param  {GridPanel} grid  		表格面板
     * @param  {int} index 				点击行索引
     */
    onGridRowActivated: function(e, grid, index) {
      var record = grid.store.getAt(index);
      //触发gridrowactivated事件(在viewport中捕获 并处理)
      if (record) {
        this.fire('gridrowactivated', this, record);
      }
    },

    /**
     * filterPanel 查询事件处理函数
     * @param  {EventObject} e            	事件对象
     * @param  {FilterPanel} filterPanel  	查询面板
     * @param  {Object[]} filter      		过滤条件
     */
    onFilterPanelSearch: function(e, filterPanel, filter) {
      var me = this,
        gridPanel = me.items.get('gridPanel');

      if (gridPanel) {
        gridPanel.filter(filter);
      }
    }
  };

  Q.each([
    'getSelectedRecord', //获取选中记录的record
    'hasSelection',//判断是否选中记录
    'reload' //刷新
  ], function(_, method) {
    proto[method] = (function(m) {

      return function() {
        var gridPanel = this.items.get('gridPanel');
        return gridPanel[m]();
      }

    })(method);
  });

  FilterGridModule = Q.Class.define(PanelModule, proto);

  return FilterGridModule;
});