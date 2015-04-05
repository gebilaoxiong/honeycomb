/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-06 22:51:30
 * @description
 */
define([
  'controls',
  'common/widget/form/BoolComboBox'
], function($, BoolComboBox) {

  return {
    type: 'VendorAddressListGrid',

    recordType: 'VendorAddressListRecord',

    properties: [{
      //id
      name: 'id',
      mapping: 'id',
      type: 'string',
      /*是否是主键*/
      isIdentity: true,
      /*是否生成列*/
      isColumn: false
    }, {
      //地点编码
      name: 'code',
      mapping: 'code',
      type: 'string',

      header: '地点编码',
      sortable: true
    }, {
      //地点名称
      name: 'name',
      mapping: 'name',
      type: 'string',

      header: '地点名称',
      sortable: true
    }, {
      //联系人
      name: 'contacter',
      mapping: 'contacter',

      header: '联系人',
      sortable: true
    }, {
      //通讯地址
      name: 'address',
      mapping: 'address',

      header: '通讯地址',
      sortable: true
    }, {
      //启用
      name: 'enabled',
      mapping: 'enabled',
      type:'bool',

      header: '启用',
      sortable: true,
      xtype:'Boolean',
      editor: BoolComboBox
    }, {
      //电话
      name: 'tel',
      mapping: 'tel',

      header: '电话',
      sortable: true
    }, {
      //手机
      name: 'mobile',
      mapping: 'mobile',

      header: '手机',
      sortable: true
    }, {
      //传真
      name: 'fex',
      mapping: 'fex',

      header: '传真',
      sortable: true
    }, {
      //电子邮箱
      name: 'email',
      mapping: 'email',

      header: '电子邮箱',
      sortable: true
    }, {
      //备注
      name: 'note',
      mapping: 'note',

      header: '备注',
      sortable: true
    }]
  };
});