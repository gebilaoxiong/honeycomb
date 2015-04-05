/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-27 01:24:38
 * @description 员工信息选项卡
 */
define([
  'infrastructure/module/TabModule',
  'project/Foundation/Department/Detail/widget/DetailInfoFormPanel',
  'project/Foundation/Department/Detail/widget/AttributeFormPanel',
], function( TabModule, DetailInfoFormPanel, AttributeFormPanel) {

  var TabModule;

  TabModule = Q.Class.define(TabModule, {

    type: 'DepartmentInfomationTabModule',

    /*模块附加布局属性*/
    cmpDefaults: {
      'infoForm': {
        title: '基本信息'
      },
      'attr': {
        title: '部门属性'
      }
    },

    items: [{
      /*员工明细信息*/
      alias: 'infoForm',
      xtype: DetailInfoFormPanel
    }, {
      /*员工任岗信息*/
      alias: 'attr',
      xtype: AttributeFormPanel
    }]
  });

  return TabModule;
});