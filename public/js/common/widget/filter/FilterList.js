/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-04 20:26:14
 * @description 过滤面板
 */
define([
  'controls',
  'common/widget/filter/FilterItem'
], function($, FilterItem) {

  var FilterList, filterInnerTmpContent;

  FilterList = Q.Class.define($.Container, {

    type: 'FilterList',

    statics: {
      getFieldMapping: function(o) {
        return o.fieldMapping;
      }
    },

    /*字段名控件默认设置*/
    fieldComboConfig: {
      width: 108,
      emptyText: '查询字段',
      triggerAction: 'all'
    },

    editorConfig: {
      emptyText: '请输入或选择关键字'
    },

    /*字段名ComboBox值字段*/
    fieldValueProperty: 'fieldMapping',

    /*字段名ComboBox 文本字段*/
    fieldDisplayProperty: 'fieldLable',

    fieldStore: undefined,

    /*是否处于折叠状态*/
    innerElCollapsed: true,

    menuAlign: 'tl-bl?',

    collapsedCls: 'x-filter-collapsed',

    /**
     * 重载 配置函数
     */
    configuration: function(settings) {
      var me = this;

      settings = settings || {};

      if (settings.fieldComboConfig) {
        me.fieldComboConfig = Q.extend({},
          me.fieldComboConfig,
          settings.fieldComboConfig);
      }

      me.callParent(arguments);

      me.layout = $.layout.AnchorLayout;
    },

    /**
     * 重载 初始化组件
     */
    initComponent: function() {
      var me = this,
        fields, fieldsStoreData, fieldsStore,
        hasDefaultFilterFiled, firstFilterField;

      me.callParent(arguments);

      if (me.fields) {
        fields = me.fields;
        me.fields = null;
      }

      //菜单
      me.menu = new $.menu.Menu();

      me.menu.bind({
        itemclick: me.onAddMenuItemClickHandler,
        /*绑定show/hide事件 是为了防止显现后下一次点击按钮 不能关闭菜单*/
        show: me.onAddMenuShow,
        hide: me.onAddMenuHide,
        scope: me
      });

      //初始化字段名称集合
      me.initFieldNames();

      //初始化字段Store
      me.initFiledsStore();

      if (fields) {
        me.addFilterFields(fields);

        //添加默认过滤字段
        me.fields.each(function(_, item) {
          if (item.isDefaultFilter) {

            //判断是否拥有默认过滤字段
            if (!hasDefaultFilterFiled) {
              hasDefaultFilterFiled = true;
            }

            me.addFilterCondition(item.fieldMapping);
          }
        });

        //如果没有默认过滤字段 设置过滤字段的第一个为默认
        if (!hasDefaultFilterFiled && (firstFilterField = me.fields.get(0))) {
          me.addFilterCondition(firstFilterField.fieldMapping);
        }
      }
    },

    /**
     * 菜单show事件处理函数
     * 绑定菜单的show\hide事件在于 判断下一次点击打开菜单开关时 是显示还是隐藏，
     * 因为菜单显示后在页面任何地方发生mousedown都会关闭
     * 此时如果我们点击的是打开按钮  则需要菜单正常关闭
     */
    onAddMenuShow: function() {
      if (this.menu.ownerCt == this) {
        this.menu.ownerCt = this;
        this.ignoreNextClick = 0;
      }
    },

    /**
     * 菜单hide事件处理函数
     */
    onAddMenuHide: function() {
      if (this.menu.ownerCt == this) {
        this.ignoreNextClick = Q.delay(this.restoreClick, this, 250);
        delete this.menu.ownerCt;
      }
    },

    //private
    restoreClick: function() {
      this.ignoreNextClick = 0;
    },

    //private
    showAddFilterMenu: function() {
      var me = this;
      if (me.rendered && me.menu) {
        if (me.menu.isVisible()) {
          me.menu.hide();
        }

        me.menu.ownerCt = me;

        me.menu.show(me.addFilterBtn, me.menuAlign);
      }
    },

    //private
    hideAddMenu: function() {
      if (this.hasVisibleMenu()) {
        this.menu.hide();
      }
      return this;
    },

    //private
    hasVisibleMenu: function() {
      return this.menu && this.menu.ownerCt == this && this.menu.isVisible();
    },

    /**
     * 菜单项点击处理函数
     * @param  {EventObject} e        事件对象
     * @param  {MenuItem} menuItem 点击的菜单项目
     */
    onAddMenuItemClickHandler: function(e, menuItem) {
      if (menuItem.mapping != null) {
        this.addFilterCondition(menuItem.mapping);
      }
    },

    /**
     * 初始化字段名集合
     */
    initFieldNames: function() {
      if (!this.fields) {
        this.fields = new Q.MixCollection(FilterList.getFieldMapping);
      }
    },

    /**
     * 初始化字段ComboBox的store 如果不存在 则创建一个
     */
    initFiledsStore: function() {
      if (!this.fieldStore) {
        this.fieldStore = new $.data.store.Json({
          autoDestroy: false,
          idProperty: this.fieldValueProperty,
          fields: [
            this.fieldValueProperty,
            this.fieldDisplayProperty
          ]
        });
      }
    },

    /**
     * 添加过滤的字段
     * @param {object|Array} fields 过滤字段配置对象
     */
    addFilterFields: function(fields) {
      var me = this,
        recordCfg, fieldCfg, i, field;

      if (fields == null) {
        return;
      }

      //单个对象
      if (Q.isObject(fields)) {
        fields = [fields];
      }

      i = 0;
      while (field = fields[i++]) {
        recordCfg = {};

        /*Record的data*/
        //值
        recordCfg[this.fieldValueProperty] = field.fieldMapping;
        //文本
        recordCfg[this.fieldDisplayProperty] = field.fieldLable;

        //添加到Store中
        me.fieldStore.loadData(recordCfg, true);
        me.fields.add(Q.applyIf({}, me.editorConfig, field));

        //添加到菜单中
        me.menu.add({
          mapping: field.fieldMapping,
          text: field.fieldLable
        });

        me.fire('addfilterfield', me, field, field.fieldLable, field.fieldMapping);
      }
    },

    /**
     * 向面板中添加过滤条件
     * @param {string} fieldMapping 字段对应的属性名称
     */
    addFilterCondition: function(fieldMapping) {
      var me = this,
        fieldCfg = me.fields.get(fieldMapping),
        filter;

      if (!fieldCfg) {
        return;
      }

      me.initItems()

      filter = me.add(me.getFilterInitConfig(fieldMapping, fieldCfg));
      filter.bindFieldStore(me.fieldStore);
      filter.bind('fieldselectchange', me.onFilterItemFieldChange, me)

      if (me.rendered) {
        me.doLayout();
      }

    },

    /**
     * 选项过滤字段变更事件处理函数
     * @param  {EventObject} e          事件对象
     * @param  {FilterItem} filterItem 过滤项控件
     * @param  {Record} record     新选中项记录
     * @param  {Record} lastRecord 原始选中项记录
     */
    onFilterItemFieldChange: function(e, filterItem, record, lastRecord) {
      var newField = record.id,
        editor = this.fields.get(newField);

      if (editor) {
        filterItem.setEditor(editor);
      }
    },

    /**
     * 获取过滤项初始化对象
     * @param  {string} fieldMapping 映射属性
     * @param  {object} fieldCfg     配置属性
     */
    getFilterInitConfig: function(fieldMapping, fieldCfg) {
      var me = this;

      return {
        xtype: FilterItem,
        //是否显示关闭按钮
        closable: me.items.count() > 0,
        //条件控件配置
        editor: fieldCfg,
        //字段控件配置
        fieldConfig: Q.extend({

          value: fieldMapping,

          valueField: me.fieldValueProperty,

          displayField: me.fieldDisplayProperty

        }, me.fieldComboConfig)
      };
    },

    /**
     * 重写 onRender 绘制内部结构
     */
    onRender: function() {
      var me = this;

      me.callParent(arguments);

      me.el.addClass('x-filter-list');

      me.el.dom.innerHTML = filterInnerTmpContent;

      me.innerEl = new Q.Element(me.el.dom.firstChild);

      me.addFilterBtn = me.innerEl.child('.x-filter-add');

      me.innerEl.on('click', me.onInnerElClickHandler, me);
    },

    /**
     * 重写afterRender 如果初始化对象要求折叠 则调用折叠方法
     */
    afterRender: function() {
      var me = this;

      if (me.padding) {
        me.el.css('padding', me.padding);
      }

      me.callParent(arguments);

      if (me.innerElCollapsed) {
        me.innerElCollapsed = false;
        me.collapse();
      }
    },

    /**
     * 处理绑定在InnerEl上的click委托事件
     * @param  {EventObject} e 事件对象
     */
    onInnerElClickHandler: function(e) {
      var me = this,
        target = e.target,
        filterItem;

      if (Q.Element.is(target, 'a.x-filter-expand-btn')) { //折叠、展开

        me.toggleCollapse();

      } else if (Q.Element.is(target, '.x-tool-remove')) { //删除过滤项
        filterItem = me.getFilterItem(e);

        //如果过滤项不存在 或该项不允许删除 返回
        if (!filterItem || !filterItem.closable) {
          return;
        }

        //删除、销毁
        me.remove(filterItem);

      } else if (Q.Element.parentUntil(target, '.x-filter-add')) { //开打添加过滤项菜单
        if (me.menu && !me.hasVisibleMenu() && !me.ignoreNextClick) {
          me.showAddFilterMenu();
        }
      }
    },

    /**
     * 获取过滤项
     * @param  {EventObject} e 事件对象
     */
    getFilterItem: function(e) {
      var target = e.target,
        itemEl = Q.Element.parentUntil(target, '.x-filter-item'),
        itemElId;

      if (!itemEl || !itemEl.id) {
        return;
      }

      itemElId = itemEl.id;

      return this.items.get(itemElId);

    },

    /**
     * 展开
     */
    expand: function() {
      var me = this;
      if (!me.innerElCollapsed && me.fire('beforeexpand', me) === false) {
        return;
      }

      me.onExpand();
      me.el.removeClass(me.collapsedCls);
      me.innerElCollapsed = false;
      me.fire('expand', me);
      return me;
    },

    onExpand: function() {
      this.items.each(function(index, item) {
        if (index != 0) {
          item.show();
          //绘制那些没有布局的元素
          if (!item.hasLayout) {
            item.doLayout();
          }
        }
      });
    },

    /**
     * 折叠
     */
    collapse: function() {
      var me = this;
      if (me.innerElCollapsed || me.fire('beforecollapse', me) === false) {
        return;
      }

      me.onCollapse();
      me.el.addClass(me.collapsedCls);
      me.innerElCollapsed = true;
      me.fire('collapse', me);
      return me;

    },

    onCollapse: function() {
      //隐藏第一个之后的所有控件 防止在隐藏期间tab键骚动
      this.items.each(function(index, item) {
        if (index != 0) {
          item.hide();
        }
      });
    },

    toggleCollapse: function() {
      this[this.innerElCollapsed ? 'expand' : 'collapse']();
      return this;
    },

    getLayoutTarget: function() {
      return this.innerEl;
    },

    /**
     * 获取过滤条件
     * @param  {Boolean} returnFilter 是否返回$.util.Filter对象
     * @return {Array}               过滤条件数组
     */
    getFilters: function(returnFilter) {
      var me = this,
        ret = [];

      if (!me.items) {
        return ret;
      }

      me.items.inject(ret, function(memo, _, filterItem) {
        var filter;

        //只提取未隐藏的过滤项
        if (filterItem.isVisible() && (filter = filterItem.getFilter(returnFilter))) {
          memo.push(filter);
        }

        return memo;
      })

      return ret;
    }

  });

  filterInnerTmpContent = [
    '<div class="x-filter-inner">',
    '<a href="javascript:;" class="x-filter-expand-btn"></a>',
    '<div class="x-filter-add unselect">',
    '<span class="x-tool x-tool-add">&nbsp;</span>',
    '<span class="x-filter-text">添加条件</span>',
    '</div>',
    '</div>'
  ].join('');

  return FilterList;
});