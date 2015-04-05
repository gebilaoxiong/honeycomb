/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-16 13:01:45
 * @description
 */
define(['controls'], function($) {


  /*导航菜单Store*/
  var MenuStore = Q.Class.define($.data.store.Json, {

    type: 'MenuStore',

    storeId: 'menuStore',

    idProperty: 'id',

    /*自动销毁*/
    autoDestroy: true,

    fields: [
      'id',
      'title',
      'dir',
      'module',
      'part',
      'view'
    ]
  });


  return MenuStore;
})