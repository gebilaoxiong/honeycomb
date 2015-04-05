/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-27 01:24:38
 * @description 员工信息选项卡
 */
define([
  'common/factory/TypeFactory',
  'infrastructure/module/TabModule',
  'project/Foundation/Employee/Detail/widget/DetailInfoFormPanel',
  'project/Foundation/Employee/Detail/meta/postGrid'
], function(TypeFactory, TabModule, DetailInfoFormPanel, postGrid) {

  var TabModule;

  TabModule = Q.Class.define(TabModule, {

    type: 'EmployeeInfomationTabModule',

    /*模块附加布局属性*/
    cmpDefaults: {
      'infoForm': {
        title: '基本信息'
      },
      'post': {
        title: '员工任岗信息'
      }
    },

    items: [{
      /*员工明细信息*/
      alias: 'infoForm',
      xtype: DetailInfoFormPanel
    }, {
      /*员工任岗信息*/
      alias: 'post',
      xtype: TypeFactory.create('module.grid.editor', postGrid)
    }]
  });

  return TabModule;
});