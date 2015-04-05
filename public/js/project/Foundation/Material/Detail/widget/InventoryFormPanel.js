/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2015-03-09 23:22:07
 * @description
 */
define([
  'controls',
  'common/widget/FormLayoutPanel',
  'common/widget/form/FieldSet',
  'projectCommon/Foundation/Unit/widget/form/SearchComboBox',
  'projectCommon/Foundation/Storehouse/widget/form/SearchComboBox'
], function(
  $,
  FormLayoutPanel,
  FieldSet,
  UnitSearchComboBox,
  StorehouseSearchComboBox
) {

  var InventoryFormPanel,
    form = $.form;

  InventoryFormPanel = Q.Class.define(FormLayoutPanel, {

    type: 'MaterialInventoryFormPanel',

    layout: 'column',

    padding: '12px 0 0',

    items: [{
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '存储',
        autoWidth: true,
        items: [{
          xtype:UnitSearchComboBox,
          name: 'specification',
          fieldLabel: '库存单位'
        }, {
          xtype:UnitSearchComboBox,
          name: 'specification',
          fieldLabel: '辅助单位'
        }, {
          name: 'specification',
          fieldLabel: '换算方向'
        }, {
          xtype:StorehouseSearchComboBox,
          name: 'specification',
          fieldLabel: '仓库'
        }, {
          name: 'specification',
          fieldLabel: '仓位'
        }]
      }, {
        xtype: FieldSet,
        title: '库存控制',
        autoWidth: true,
        items: [{
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '可锁库'
        }]
      }, {
        xtype: FieldSet,
        title: '循环盘点',
        autoWidth: true,
        items: [{
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '启用周期盘点'
        },{
          name:'specification',
          fieldLabel:'盘点周期'
        },{
          name:'specification',
          fieldLabel:'盘点日期'
        },{
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '必盘'
        }]
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '管理',
        autoWidth: true,
        items: [{
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '启用批号管理'
        }, {
          name: 'specification',
          fieldLabel: '批号编码规则'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '启用保质期管理'
        }, {
          xtype: form.Checkbox,
          name: 'specification',
          boxLabel: '批号附属信息'
        }, {
          name: 'specification',
          fieldLabel: '保质期单位'
        }, {
          name: 'specification',
          fieldLabel: '保质期'
        }, {
          name: 'specification',
          fieldLabel: '在架寿命期'
        }]
      }, {
        xtype: FieldSet,
        title: '库存成本',
        autoWidth: true,
        items: [{
          name: 'specification',
          fieldLabel: '参考成本'
        }, {
          name: 'specification',
          fieldLabel: '币别'
        }]
      }]
    }, {
      xtype: FormLayoutPanel,
      columnWidth: .3,
      items: [{
        xtype: FieldSet,
        title: '库存计划',
        autoWidth: true,
        items: [{
          xtype: form.CheckboxGroup,
          fieldLabel: '启用预警',
          columns: 2,
          items: [{
            name: 'specification',
            boxLabel: '最小库存'
          }, {
            name: 'specification',
            boxLabel: '最小库存'
          }, {
            name: 'specification',
            boxLabel: '最大库存'
          }, {
            name: 'specification',
            boxLabel: '再订货点'
          }]
        }, {
          name: 'specification',
          fieldLabel: '最小库存'
        }, {
          name: 'specification',
          fieldLabel: '安全库存'
        }, {
          name: 'specification',
          fieldLabel: '再订货点'
        }, {
          name: 'specification',
          fieldLabel: '经济订货批量'
        }, {
          name: 'specification',
          fieldLabel: '最大库存'
        }]
      }, {
        xtype: FieldSet,
        title: '序列号管理',
        autoWidth: true,
        items:[{
          xtype:form.Checkbox,
          name: 'specification',
          boxLabel: '启用序列号管理'
        }, {
          name: 'specification',
          fieldLabel: '序列号编码规则'
        }, {
          name: 'specification',
          fieldLabel: '序列号单位'
        }, {
          xtype:form.RadioGroup,
          name: 'specification',
          fieldLabel: '业务范围',
          columns:1,
          items:[{
            name:'specification1',
            boxLabel:'管理所有出入库业务的序列号'
          },{
            name:'specification1',
            boxLabel:'仅管理出库业务的序列号'
          }]
        }, {
          xtype:form.RadioGroup,
          name: 'specification',
          fieldLabel: '序列号生成时机',
          columns:2,
          items:[{
            name:'specification2',
            boxLabel:'自动生成'
          },{
            name:'specification2',
            boxLabel:'预先生成'
          }]
        }]
      }]
    }]
  })

  return InventoryFormPanel;
})