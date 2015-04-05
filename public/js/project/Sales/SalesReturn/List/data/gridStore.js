/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:27
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/Sales/SalesReturn/search',
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
