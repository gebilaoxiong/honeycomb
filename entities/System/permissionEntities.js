/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 22:41:44
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  group: '查询',
  code: 'BOS_VIEWSUBDATA',
  name: '查看下级组织数据',
  description: '',
  preset: true
}, {
  group: '查询',
  code: 'DRP_PEORDERDD_VIEW',
  name: '查看智能补货',
  description: '',
  preset: true
}, {
  group: '查询',
  code: 'VIEW',
  name: '查看',
  description: '',
  preset: true
}, {
  group: '编辑',
  code: 'BATCHMODIFY',
  name: '批改',
  description: '',
  preset: true
}, {
  group: '编辑',
  code: 'BOS_COPY',
  name: '复制',
  description: '',
  preset: true
}, {
  group: '编辑',
  code: 'CANCELASSGN',
  name: '撤销',
  description: '撤销工作流提交，撤销提交，撤销已办任务',
  preset: true
}, {
  group: '编辑',
  code: 'DELETE',
  name: '删除',
  description: '',
  preset: true
}, {
  group: '编辑',
  code: 'MODIFY',
  name: '修改',
  description: '',
  preset: true
}, {
  group: '编辑',
  code: 'NEW',
  name: '新增',
  description: '用于对新增操作的权限控制；必先有查看权限',
  preset: true
}, {
  group: '编辑',
  code: 'SUBMIT',
  name: '提交',
  description: '',
  preset: true
}, {
  group: '审核',
  code: 'AUDIT',
  name: '审核',
  description: '',
  preset: true
}, {
  group: '审核',
  code: 'UNAUDIT',
  name: '反审核',
  description: '',
  preset: true
}])