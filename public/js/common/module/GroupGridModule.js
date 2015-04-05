/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-22 00:22:55
 * @description 类别表单面板模块
 */
define([
  'infrastructure/module/PanelModule'
], function(PanelModule) {

  var GroupGridModule;

  GroupGridModule = Q.Class.define(PanelModule, {

    type:'GroupGridModule',

    defaults: {
      background: false
    },

    background: false,

    layout: 'border',

    /*子模块附加布局属性*/
    cmpDefaults: {
      'groupPanel': {
        margins: '0 20px 0 20px',
        region: 'west',
        width: 230
      },
      'gridPanel': {
        region: 'center'
      }
    },

    initComponent: function() {
      this.callParent(arguments);
      /*转播grid的事件*/
      this.relayEvents('gridPanel', ['rowdblclick', 'linkcolumnclick'])
    },

    /*表格的过滤*/
    filter: callGridPanelFactory('filter'),

    /*表格的判断是否有选中数据*/
    hasSelection: callGridPanelFactory('hasSelection'),

    /*表格的获取选中行的记录*/
    getSelectedRecord: callGridPanelFactory('getSelectedRecord')
  });


  /**
   * 调用表格模块方法
   * @param  {string}           method                方法名称
   */
  function callGridPanelFactory(method) {
    return function() {
      var gridPanel = this.items.get('gridPanel'),
        ret;

      //将类别面板选中的行 加入过滤
      if (gridPanel) {
        ret = gridPanel[method].apply(gridPanel, arguments);
      }

      return ret;
    }
  }

  return GroupGridModule;
})