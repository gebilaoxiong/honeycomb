/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-15 16:19:09
 * @description
 */
define([
  'project/Default/Menu/Index/data/foundation',
  'project/Default/Menu/Index/data/information',
  'project/Default/Menu/Index/data/system',
  'project/Default/Menu/Index/data/purchase',
  'project/Default/Menu/Index/data/sales',
  'project/Default/Menu/Index/data/credit',
  'project/Default/Menu/Index/data/inventory'
], function(foundation, information, system, purchase, sales, credit, inventory) {
  return {
    id: 'menuRoot',
    children: [{
      id: 1,
      text: '财务会计',
      leaf: true
    }, {
      id: 2,
      text: '成本管理',
      leaf: true
    }, {
      id: 3,
      text: '资产管理',
      leaf: true
    }, {
      id: 4,
      text: '供应链',
      leaf: false,
      children: [{
        text: '采购管理',
        data: purchase,
        leaf: true
      }, {
        text: '销售管理',
        data: sales,
        leaf: true
      }, {
        text: '信用管理',
        data: credit,
        leaf: true
      }, {
        text: '库存管理',
        data: inventory,
        leaf: true
      }, {
        text: '组织间结算',
        leaf: true
      }]
    }, {
      id: 5,
      text: '电商与分销',
      leaf: true
    }, {
      id: 6,
      text: '流程中心',
      leaf: true
    }, {
      id: 7,
      text: '基础管理',
      children: [{
        id: 'fondition',
        text: '基础资料',
        data: foundation,
        leaf: true
      }, {
        text: '业务初始化',
        leaf: true
      }, {
        text: '业务监控',
        leaf: true
      }]
    }, {
      id: 8,
      text: '系统管理',
      children: [{
        id: 'System',
        text: '系统管理',
        data: system,
        leaf: true
      }]
    }]
  };
})