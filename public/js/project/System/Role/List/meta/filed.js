/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:59:17
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
    //编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '编码',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '名称',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //类型
    name: 'type',
    mapping: 'type',
    type: 'string',

    header: '类型',
    sortable: true
  }, {
    //系统预制
    name: 'preset',
    mapping: 'preset',
    type: 'bool',

    header: '系统预制',
    xtype: 'Boolean',
    sortable: true
  }, {
    //属性
    name: 'attribute',
    mapping: 'attribute',
    type: 'bool',

    header: '属性',
    xtype: 'Boolean',
    sortable: true
  }, {
    //所属组织
    name: 'org',
    mapping: 'org',
    type: 'bool',

    header: '所属组织',
    xtype: 'Boolean',
    sortable: true
  }];
})