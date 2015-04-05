/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-26 11:47:09
 * @description
 */
define(['controls'], function($) {
  var HttpJsonStore;

  HttpJsonStore = Q.Class.define($.data.store.Json, {

    type: 'HttpJsonStore',

    autoDestroy: true,

    remoteSort: true,

    remoteFilter: true
  });

  return HttpJsonStore;
})