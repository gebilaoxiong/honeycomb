/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-02 21:08:59
 * @description
 */
define(function() {

  var GridColumnRenderer,
    //数据状态
    dataStateMap = {
      'default': '未知',
      'hold': '暂存',
      'saved': '已保存',
      'auditing': '审核中',
      'audited': '已审核',
      'reaudit': '重新审核'
    };

  GridColumnRenderer = {
    /**
     * 数据状态renderer
     */
    dataState: function(value) {
      return dataStateMap[value in dataStateMap ? value : 'default'];
    }
  };

  return GridColumnRenderer;
})