/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:04:10
 * @description 
 */
define(function() {
  return [{
    //ID
    name: 'id',
    mapping: 'id',
    type: 'string',
    /*是否是主键*/
    isIdentity: true,
    /*是否生成列*/
    isColumn: false
  }, {
    //操作用户
    name: 'user',
    mapping: 'user',
    type: 'string',

    header: '操作用户',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  },  {
    //操作时间
    name: 'operationDate',
    mapping: 'operationDate',
    type: 'string',

    header: '操作时间',
    sortable: true
  }, {
    //当前组织
    name: 'org',
    mapping: 'org',
    type: 'string',

    header: '当前组织',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //子系统
    name: 'subSystem',
    mapping: 'subSystem',
    type: 'string',

    header: '子系统',
    sortable: true
  }, {
    //业务对象
    name: 'businessObject',
    mapping: 'businessObject',
    type: 'string',

    header: '业务对象',
    sortable: true
  }, {
    //操作场景
    name: 'scene',
    mapping: 'scene',
    type: 'string',

    header: '操作场景',
    sortable: true
  }, {
    //操作名称
    name: 'operationName',
    mapping: 'operationName',
    type: 'string',

    header: '操作名称',
    sortable: true
  },{
    //操作描述
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '操作描述',
    sortable: true
  }, {
    //IP地址
    name: 'ipAddress',
    mapping: 'ipAddress',
    type: 'string',

    header: 'IP地址',
    sortable: true
  }, {
    //机器名称
    name: 'macAddress',
    mapping: 'macAddress',
    type: 'string',

    header: '机器名称',
    sortable: true
  }];
})

