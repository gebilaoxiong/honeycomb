/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:17
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/System/OperationLog/search',
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
