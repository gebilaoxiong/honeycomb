/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-10 02:18:06
 * @description
 */
define(['infrastructure/view/View'], function(View) {
  var IndexView;

  IndexView = Q.Class.define(View, {
    type: 'HomeView',

    title: 'Begin'
  });

  return IndexView;
})