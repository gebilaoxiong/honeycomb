/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 20:01:32
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/Foundation/Customer/search',
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