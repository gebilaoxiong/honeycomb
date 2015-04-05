/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 13:02:04
 * @description
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/Foundation/Material/search',
      method: 'GET'
    }
  },

  autoLoad: {
    params: {
      start: 0,
      limit: 25
    }
  }
})