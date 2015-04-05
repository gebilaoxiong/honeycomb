/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-20 21:14:41
 * @description 表格部分类
 */
define(function() {
  var GridModulePartial;

  GridModulePartial = {

    /*基数行变色*/
    stripeRows: false,

    background: false,

    /*过滤*/
    filter: function(filters) {
      var store = this.store,
        options;


      if (store) {
        if (filters.length) {
          store.filters.clear();
          store.filter(filters);
        } else {
          //清除过滤
          store.clearFilter();
        }
      }
    },

    /*获取选中的记录*/
    getSelectedRecord: function() {
      var selModel = this.selModel;

      return selModel.selections ?
        //RowSelectionModel
        selModel.getSelections() :
        //CellSelectionModel
        (selModel.selection ? [selModel.selection.record] : undefined);
    },

    /*判断是否选中数据*/
    hasSelection: function() {
      return this.selModel.hasSelection();
    },

    reload: function() {
      this.store.reload();
    }
  }

  return GridModulePartial;
});