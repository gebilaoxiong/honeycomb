/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-02 23:13:58
 * @description
 */
define([
  'controls',
  'common/widget/form/BoolComboBox'
], function($, BoolComboBox) {

  return {
    type: 'CustomerContacterListGrid',

    recordType: 'CustomerContacterListRecord',

    properties: [{
      //ID
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
      //业务地点
      name: 'businessPlace',
      mapping: 'businessPlace',
      type: 'string',

      header: '业务地点',
      sortable: true
    }, {
      //办公电话
      name: 'tell',
      mapping: 'tell',
      type: 'string',

      header: '办公电话',
      sortable: true
    }, {
      //移动电话
      name: 'mobile',
      mapping: 'mobile',
      type: 'string',

      header: '移动电话',
      sortable: true
    }, {
      //传真
      name: 'fax',
      mapping: 'fax',
      type: 'string',

      header: '传真',
      sortable: true
    }, {
      //电子邮箱
      name: 'email',
      mapping: 'email',
      type: 'string',

      header: '电子邮箱',
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