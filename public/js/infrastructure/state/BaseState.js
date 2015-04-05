/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-28 23:57:12
 * @description 状态基类
 */
define(function() {
  return Q.Class.define(Q.Abstract, {

    type: 'BaseState',

    /**
     * 状态名称
     * @type {string}
     */
    state: undefined,

    init: function(config) {
      Q.extend(this, config);
    }
  });
})