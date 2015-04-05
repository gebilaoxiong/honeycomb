/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
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
    //物料编码
    name: 'materialCode',
    mapping: 'materialCode',
    type: 'string',

    header: '物料编码',
    sortable: true
  }, {
    //物料名称
    name: 'materialName',
    mapping: 'materialName',
    type: 'string',

    header: '物料名称',
    sortable: true
  }, {
    //单位
    name: 'unit',
    mapping: 'unit',
    type: 'string',

    header: '单位',
    sortable: true
  }, {
    //基本单位(为此种物料在物料中定义的单位)
    name: 'baseUnit',
    mapping: 'baseUnit',
    type: 'string',

    header: '基本单位',
    sortable: true
  }, {
    //分子
    name: 'numerator',
    mapping: 'numerator',
    type: 'float',

    header: '分子',
    xtype: 'Number',
    sortable: true
  }, {
    //分母
    name: 'denominator',
    mapping: 'denominator',
    type: 'float',

    header: '分母',
    xtype: 'Number',
    sortable: true
  }, {
    //换算类型
    name: 'conversionType',
    mapping: 'conversionType',
    type: 'string',

    header: '换算类型',
    sortable: true
  }, {
    //创建人
    name: 'creater',
    mapping: 'creater',
    type: 'string',

    header: '创建人',
    sortable: true
  }, {
    //创建日期
    name: 'createDate',
    mapping: 'createDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '创建日期',
    xtype: 'Date',
    sortable: true
  }, {
    //修改人
    name: 'modifier',
    mapping: 'modifier',
    type: 'string',

    header: '修改人',
    sortable: true
  }, {
    //修改日期
    name: 'modifiedDate',
    mapping: 'modifiedDate',
    type: 'date',
    dateFormat: 'YYYY/MM/dd',

    header: '修改日期',
    xtype: 'Date',
    sortable: true
  }];
})