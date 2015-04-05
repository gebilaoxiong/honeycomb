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
    //评估模型编码
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '评估模型编码',
    xtype:'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //评估模型名称
    name: 'name',
    mapping: 'name',
    type: 'string',

    header: '评估模型名称',
    sortable: true
  }, {
    //日期
    name: 'date',
    mapping: 'date',
    type: 'date',
    dateFormat:'YYYY/MM/dd',

    header: '日期',
    xtype: 'Date',
    format:'YYYY-MM-dd',
    sortable: true
  }, {
    //模型总分
    name: 'total',
    mapping: 'total',
    type: 'float',

    header: '模型总分',
    xtype:'Number',
    sortable: true
  }, {
    //数据状态
    name: 'dataState',
    mapping: 'dataState',
    type: 'string',

    header: '数据状态',
    sortable: true
  }, {
    //评估指标编码
    name: 'indicatorCode',
    mapping: 'indicatorCode',
    type: 'string',

    header: '评估指标编码',
    sortable: true
  }, {
    //评估指标名称
    name: 'indicatorName',
    mapping: 'indicatorName',
    type: 'string',

    header: '评估指标名称',
    sortable: true
  }, {
    //评分标准
    name: 'indicatorCriterion',
    mapping: 'indicatorCriterion',
    type: 'string',

    header: '评分标准',
    sortable: true
  }, {
    //权重%
    name: 'weight',
    mapping: 'weight',
    type: 'float',

    header: '权重%',
    xtype:'Number',
    sortable: true
  }];
})