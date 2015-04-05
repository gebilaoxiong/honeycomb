/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description
 */
define(function() {
  return [{
    //id
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
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  },  {
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
    mapping: 'Modifier',
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
  }, {
    //物料名称
    name: 'materialName',
    mapping: 'materialName',
    type: 'string',

    header: '物料名称',
    sortable: true
  }, {
    //辅助属性
    name: 'secondaryAttribute',
    mapping: 'secondaryAttribute',
    type: 'string',

    header: '辅助属性',
    sortable: true
  }];
})