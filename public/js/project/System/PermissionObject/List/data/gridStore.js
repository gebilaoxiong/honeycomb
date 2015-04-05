/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:28:32
 * @description 
 */

define({
  root: 'data',

  api: {
    read: {
      url: '/System/PermissionObject/search',
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