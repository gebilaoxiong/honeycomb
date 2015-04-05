/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-01 21:35:21
 * @description 员工信息元数据
 */
define({
  type: 'EmployeeInfomationForm',

  items: [{
    name: 'mobile',
    fieldLabel: '移动电话',
    allowBlank: false
  }, {
    name: 'address',
    xtype: "TextArea",
    rowspan: 3,
    fieldLabel: '联系地址',
    allowBlank: false
  }, {
    name: 'description',
    xtype: "TextArea",
    rowspan: 3,
    fieldLabel: '描述',
    allowBlank: false
  }, {
    name: 'tell',
    fieldLabel: '固定电话',
    allowBlank: false
  }, {
    name: 'email',
    fieldLabel: '电子邮箱',
    allowBlank: false
  }]
});