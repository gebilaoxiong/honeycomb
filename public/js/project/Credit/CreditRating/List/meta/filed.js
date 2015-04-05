/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:26:53
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
    //信用等级方案
    name: 'ratingScheme',
    mapping: 'ratingScheme',
    type: 'string',

    header: '信用等级方案',
    width: 120,
    sortable: true
  }, {
    //信用编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '信用编码',
    width: 120,
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //信用等级名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '信用等级名称',
    sortable: true
  }, {
    //信用等级说明
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '信用等级说明',
    width: 150,
    sortable: true
  }, {
    //分值范围从
    name: 'scoreFloor',
    mapping: 'scoreFloor',
    type: 'float',

    header: '分值范围从',
    xtype: 'Number',
    align: 'right',
    sortable: true
  }, {
    //分值范围至
    name: 'scoreCeiling',
    mapping: 'scoreCeiling',
    type: 'float',

    header: '分值范围至',
    xtype: 'Number',
    align: 'right',
    sortable: true
  }, {
    //禁用状态
    name: 'disabled',
    mapping: 'disabled',
    type: 'bool',

    header: '禁用状态',
    xtype: 'Boolean',
    sortable: true
  }];
})