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
    //评估编号
    name: 'code',
    mapping: 'code',
    type: 'string',

    header: '评估编号',
    xtype:'Link',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //客户
    name: 'customer',
    mapping: 'customer',
    type: 'string',

    header: '客户',
    sortable: true
  }, {
    //评估日期
    name: 'evaluationDate',
    mapping: 'evaluationDate',
    type: 'date',
    dateFormat:'YYYY/MM/dd',

    header: '评估日期',
    xtype: 'Date',
    sortable: true
  }, {
    //评估组织
    name: 'evaluationOrg',
    mapping: 'evaluationOrg',
    type: 'string',

    header: '评估组织',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //评估模型
    name: 'evaluationModel',
    mapping: 'evaluationModel',
    type: 'string',

    header: '评估模型',
    sortable: true
  }, {
    //综合得分
    name: 'grade',
    mapping: 'grade',
    useNull:true,
    type: 'float',

    header: '综合得分',
    xtype:'Number',
    sortable: true
  }, {
    //等级方案
    name: 'creditRating',
    mapping: 'creditRating',
    type: 'string',

    header: '等级方案',
    sortable: true
  }, {
    //评估等级
    name: 'ratingLevel',
    mapping: 'ratingLevel',
    type: 'string',

    header: '评估等级',
    sortable: true
  }];
})