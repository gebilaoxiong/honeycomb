/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 23:42:37
 * @description
 */
define([
  'controls',
  'common/widget/form/BoolComboBox'
], function($, BoolComboBox) {

  return {
    type: 'VendorBankListGrid',

    recordType: 'VendorBankListRecord',

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
      //开户国家
      name: 'country',
      mapping: 'country',
      type: 'string',

      header: '开户国家',
      sortable: true
    }, {
      //开户银行
      name: 'bank',
      mapping: 'bank',
      type: 'string',

      header: '开户银行',
      sortable: true
    }, {
      //银行账号
      name: 'accountID',
      mapping: 'accountID',

      header: '银行账号',
      sortable: true
    }, {
      //账户名称
      name: 'accountName',
      mapping: 'accountName',

      header: '账户名称',
      sortable: true
    }, {
      //币别
      name: 'currency',
      mapping: 'currency',

      header: '币别',
      sortable: true
    }, {
      //默认
      name: 'isDefault',
      mapping: 'isDefault',
      type: 'bool',

      header: '默认',
      sortable: true,
      xtype: 'Boolean',

      editable: true,
      editor: BoolComboBox
    }]
  };
});