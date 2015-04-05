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
    //指标编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '指标编码',
    xtype: 'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //指标名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '指标名称',
    sortable: true
  }, {
    //指标指标描述
    name: 'description',
    mapping: 'description',
    type: 'string',

    header: '指标指标描述',
    sortable: true
  }, {
    //上级指标
    name: 'superIndicator',
    mapping: 'superIndicator',
    type: 'string',

    header: '上级指标',
    sortable: true
  }, {
    //指标类型
    name: 'indicatorType',
    mapping: 'indicatorType',
    type: 'string',

    header: '指标类型',
    sortable: true
  }, {
    //得分标准
    name: 'criterion',
    mapping: 'criterion',
    type: 'string',

    header: '得分标准',
    sortable: true
  }, {
    //实际数值从
    name: 'actualValueFloor',
    mapping: 'actualValueFloor',
    type: 'float',

    header: '实际数值从',
    xtype: 'Number',
    sortable: true
  }, {
    //实际数值至
    name: 'actualValueCeiling',
    mapping: 'actualValueCeiling',
    type: 'float',

    header: '实际数值至',
    xtype: 'Number',
    sortable: true
  },{
    //得分
    name: 'score',
    mapping: 'score',
    type: 'float',

    header: '得分',
    xtype: 'Number',
    sortable: true
  }, {
    //备注
    name: 'note',
    mapping: 'note',
    type: 'string',

    header: '备注',
    sortable: true
  }];
})