/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-03-24 14:38:13
 * @description 主要用于调试用本地数据的 Store
 */
define(['controls'], function($) {

  var MemoryJsonStore;

  MemoryJsonStore = Q.Class.define($.data.store.Json, {

    type: 'MemoryJsonStore',

    autoDestroy: true,

    init: function(settings) {

      if (settings.initMeta) {
        settings = Q.extend({}, settings.initMeta, settings);
        delete settings.initMeta;
        delete settings.xtype;
      }

      if (!settings.proxy) {
        settings.proxy = new $.data.proxy.Memory(settings.data);
      }

      this.callParent('init', [settings]);
    }
  });


  return MemoryJsonStore;
});