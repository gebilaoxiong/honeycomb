/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:17
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/Foundation/ExchangeRate/search',
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
