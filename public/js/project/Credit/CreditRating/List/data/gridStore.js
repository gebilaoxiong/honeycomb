/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:27:18
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/Credit/CreditRating/search',
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
