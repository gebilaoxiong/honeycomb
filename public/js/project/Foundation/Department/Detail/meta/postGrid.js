/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-01 21:56:00
 * @description
 */
define([
  'controls',
  'common/widget/form/BoolComboBox',
  'projectCommon/Foundation/Organization/widget/form/SearchComboBox',
  'projectCommon/Foundation/Department/widget/form/SearchComboBox',
  'projectCommon/Foundation/Post/widget/form/SearchComboBox'
], function($, BoolComboBox, OrganizationSearchComboBox, DepartmentSearchComboBox, PostSearchComboBox) {

  return {
    type: 'DepartmentPostListGrid',

    recordType: 'DepartmentPostListRecord',

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
      //工作组织
      name: 'org',
      mapping: 'org',

      header: '工作组织',
      sortable: true,

      renderer: '{name}',
      editable: true,
      editor: OrganizationSearchComboBox
    }, {
      //所属部门
      name: 'department',
      mapping: 'department',

      header: '所属部门',
      sortable: true,

      renderer: '{name}',
      editable: true,
      editor: DepartmentSearchComboBox
    }, {
      //就任岗位
      name: 'post',
      mapping: 'post',

      header: '就任岗位',
      sortable: true,

      renderer: '{name}',
      editable: true,
      editor: PostSearchComboBox
    }, {
      //任岗开始日期
      name: 'dutyTime',
      mapping: 'dutyTime',
      type: 'date',
      dateFormat: 'YYYY/MM/dd',

      header: '任岗位开始日期',
      xtype: 'Date',
      width: 130,
      sortable: true,

      editable: true,
      editor: $.form.DateField
    }, {
      //是否主任岗
      name: 'isPrimaryDuty',
      mapping: 'isPrimaryDuty',
      type: 'bool',

      header: '是否主任岗',
      xtype: 'Boolean',
      sortable: true,

      editable: true,
      editor: BoolComboBox
    }, {
      //禁用状态
      name: 'disabled',
      mapping: 'disabled',
      type: 'bool',

      header: '禁用状态',
      xtype: 'Boolean',
      sortable: true,

      editable: true,
      editor: BoolComboBox
    }, {
      //部门全称
      name: 'departmentFullName',
      mapping: 'departmentFullName',
      type: 'string',

      header: '部门全称',
      sortable: true
    }]
  };
});