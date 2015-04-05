/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-08 02:13:26
 * @description  过滤模块
 *
 *
 * @event   search 搜索按钮点击
 *          参数
 *          @param  {eventObj} e        	事件对象
 *          @param  {FilterModule} filterPanel 面板
 *          @param  {Object[]}   filters 	筛选条件
 */
define([
  'controls',
  'common/widget/filter/FilterList',
  'infrastructure/module/PanelModule'
], function($, FilterList, PanelModule) {

  var FilterModule;

  FilterModule = Q.Class.define(PanelModule, {

    type: 'FilterModule',

    /*是否在事件中返回Filter对象*/
    exportFilter: false,

    initComponent: function() {
      var me = this;

      me.callParent(arguments);

      me.filterList = new FilterList({
        fields: me.fields
      });

      me.filterList.ownerCt = me;

      delete me.defaultField;
      delete me.fields;

      me.searchBtn = new $.Button({
        text: '搜索',
        scale: 'small',
        cls: 'x-search-btn'
      });

      me.searchBtn.bind('click', me.onSearchBtnClick, me);
    },

    /**
     * 搜索按钮点击事件处理函数
     */
    onSearchBtnClick: function() {
      var me = this,
        filters = this.filterList.getFilters(this.exportFilter);

      if (me.fire('beforserch', this, filters) !== false) {
        this.fire('search', this, filters);
      }
    },

    /**
     * 重写 afterRender 绘制控件内容
     */
    afterRender: function() {
      var me = this,
        layoutTarget = me.getLayoutTarget();

      me.el.addClass('x-filter-panel');
      me.body.addClass('x-filter-body')

      //绘制过滤List
      me.filterList.render(layoutTarget);
      //按钮
      me.searchBtn.render(layoutTarget);

      me.callParent(arguments);
    },

    onLayout: function() {
      var me = this,
        layoutTarget = me.getLayoutTarget();

      me.filterList.setWidth(layoutTarget.width() - me.searchBtn.el.outerWidth(true));
    }
  });

  return FilterModule;
});