/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-16 22:23:09
 * @description
 */
define({
  //删除
  remove: {
    url: '/Foundation/Employee/remove',
    method: 'POST'
  },
  //恢复删除
  recycle: {
    url: '/Foundation/Employee/recycle',
    method: 'POST'
  },
  //送审
  audit: {
    url: '/Foundation/Employee/audit',
    method: 'POST'
  },
  //撤销审批
  cancel: {
    url: '/Foundation/Employee/cancel',
    method: 'POST'
  },
  //审批通过
  consent: {
    url: '/Foundation/Employee/consent',
    method: 'POST'
  },
  //驳回
  reject: {
    url: '/Foundation/Employee/reject',
    method: 'POST'
  }
})