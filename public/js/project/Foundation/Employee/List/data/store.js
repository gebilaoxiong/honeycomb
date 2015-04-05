/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 12:59:16
 * @description
 */
define({

  root: 'data',

  api: {
    read: {
      url: '/Foundation/Employee/search',
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