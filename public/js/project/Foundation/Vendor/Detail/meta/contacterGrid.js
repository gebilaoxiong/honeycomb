/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-06 23:09:11
 * @description 
 */
define([
  'controls',
  'common/widget/form/BoolComboBox'
], function($, BoolComboBox) {

  return {
    type: 'VendorContacterListGrid',

    recordType: 'VendorContacterListRecord',

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
      //联系人
      name: 'name',
      mapping: 'name',
      type: 'string',

      header: '联系人',
      sortable: true
    }, {
      //职务
      name: 'position',
      mapping: 'position',
      type: 'string',

      header: '职务',
      sortable: true
    }, {
      //电话
      name: 'tel',
      mapping: 'tel',

      header: '电话',
      sortable: true
    }, {
      //手机
      name: 'phone',
      mapping: 'phone',

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
