/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 23:45:48
 * @description 
 */
define({
  root: 'data',

  api: {
    read: {
      url: '/System/PermissionDataRule/search',
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

