/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-25 23:14:30
 * @description 选项卡模块
 */
define(['controls', 'infrastructure/module/ModulePartial'], function($, ModulePartial) {
  return Q.Class.define($.TabPanel, ModulePartial, {

    type: 'TabModule',

    maskDisabled: false,

    background: false,

    /*默认选中项*/
    activeTab: 0,

    defaults: {
      background: false,
      border: false
    }
  });
});