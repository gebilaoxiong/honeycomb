/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:42
 * @description
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/Foundation/TaxRate/search',
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