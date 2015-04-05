/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 23:54:58
 * @description
 */
define([
  'controls',
  'common/widget/form/BoolComboBox'
], function($,BoolComboBox) {

  return {
    type: 'CustomerAddressListGrid',

    recordType: 'CustomerAddressListRecord',

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
      name: 'code',
      mapping: 'code',
      type: 'string',

      header: '地点编码'
    }, {
      //地点名称
      name: 'name',
      mapping: 'name',
      type: 'string',

      header: '地点名称',
      sortable: true
    }, {
      //详细地址
      name: 'detailsAddress',
      mapping: 'detailsAddress',
      type: 'string',

      header: '详细地址',
      sortable: true
    }, {
      //运输提前期
      name: 'advanceDate',
      mapping: 'advanceDate',
      type: 'int',

      header: '运输提前期',
      sortable: true,
      xtype: 'Number'
    }, {
      //联系人
      name: 'contacter',
      mapping: 'contacter',
      type: 'string',

      header: '联系人',
      sortable: true
    }, {
      //联系电话
      name: 'tell',
      mapping: 'tell',
      type: 'string',

      header: '联系电话',
      sortable: true
    }, {
      //电子邮箱
      name: 'email',
      mapping: 'email',
      type: 'string',

      header: '电子邮箱',
      sortable: true
    }, {
      //默认收货地址
      name: 'isDefaultAddress',
      mapping: 'isDefaultAddress',
      type: 'bool',

      header: '默认收货地址',
      sortable: true,
      xtype: 'Boolean',

      editable: true,
      editor: BoolComboBox
    }, {
      //默认开票地址
      name: 'isDefaultBillAddress',
      mapping: 'isDefaultBillAddress',
      type: 'bool',

      header: '默认开票地址',
      sortable: true,
      xtype: 'Boolean',

      editable: true,
      editor: BoolComboBox
    }, {
      //默认付款地址
      name: 'isDefaultPaymentAddress',
      mapping: 'isDefaultPaymentAddress',
      type: 'bool',

      header: '默认付款地址',
      sortable: true,
      xtype: 'Boolean',

      editable: true,
      editor: BoolComboBox
    },  {
      //启用
      name: 'enabled',
      mapping: 'enabled',
      type: 'bool',

      header: '启用',
      sortable: true,
      xtype: 'Boolean',

      editable: true,
      editor: BoolComboBox
    }]
  };
});