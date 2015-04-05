/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-13 13:03:09
 * @description 销售
 */

define(function() {
  return [{
    id: 0,
    dir: true,
    title: '报价'
  }, {
    id: 1,
    title: '销售报价单',
    module: 'Sales',
    part: 'SalesQuotation',
    view: 'List'
  }, {
    id: 2,
    title: '销售报价单列表',
    module: 'Sales',
    part: 'SalesQuotation',
    view: 'List'
  }, {
    id: 3,
    dir: true,
    title: '订单'
  }, {
    id: 4,
    title: '销售订单',
    module: 'Sales',
    part: 'SalesOrder',
    view: 'List'
  }, {
    id: 5,
    title: '销售订单列表',
    module: 'Sales',
    part: 'SalesOrder',
    view: 'List'
  }, {
    id: 6,
    title: '销售订单变更单',
    module: 'Sales',
    part: 'SalesOrderAlter',
    view: 'List'
  }, {
    id: 7,
    title: '销售订单变更单列表',
    module: 'Sales',
    part: 'SalesOrderAlter',
    view: 'List'
  }, {
    id: 8,
    dir: true,
    title: '出货处理'
  }, {
    id: 9,
    title: '可发量查询',
    module: 'Sales',
    part: 'Shipments',
    view: 'List'
  }, {
    id: 10,
    title: '发货通知单',
    module: 'Sales',
    part: 'DeliveryNote',
    view: 'List'
  }, {
    id: 11,
    title: '发货通知单列表',
    module: 'Sales',
    part: 'DeliveryNote',
    view: 'List'
  }, {
    id: 12,
    title: '销售出库单',
    module: 'Sales',
    part: 'SalesExport',
    view: 'List'
  }, {
    id: 13,
    title: '销售出库单列表',
    module: 'Sales',
    part: 'SalesExport',
    view: 'List'
  }, {
    id: 14,
    dir: true,
    title: '退货处理'
  },{
    id: 15,
    title: '退货通知单',
    module: 'Sales',
    part: 'ReturnNote',
    view: 'List'
  },{
    id: 16,
    title: '退货通知单列表',
    module: 'Sales',
    part: 'ReturnNote',
    view: 'List'
  },{
    id: 17,
    title: '销售退货单',
    module: 'Sales',
    part: 'SalesReturn',
    view: 'List'
  },{
    id: 18,
    title: '销售退货单列表',
    module: 'Sales',
    part: 'SalesReturn',
    view: 'List'
  }, {
    id: 19,
    dir: true,
    title: '价格管理'
  },{
    id: 20,
    title: '销售价目表',
    module: 'Sales',
    part: 'SalesPrice',
    view: 'List'
  },{
    id: 21,
    title: '销售价目表列表',
    module: 'Sales',
    part: 'SalesPrice',
    view: 'List'
  },{
    id: 22,
    title: '销售折扣表',
    module: 'Sales',
    part: 'SalesDiscount',
    view: 'List'
  },{
    id: 23,
    title: '销售折扣表列表',
    module: 'Sales',
    part: 'SalesDiscount',
    view: 'List'
  },{
    id: 24,
    title: '销售调价方案',
    module: 'Sales',
    part: 'SalesPriceAdjust',
    view: 'List'
  },{
    id: 25,
    title: '销售调价方案列表',
    module: 'Sales',
    part: 'SalesPriceAdjust',
    view: 'List'
  }]
})