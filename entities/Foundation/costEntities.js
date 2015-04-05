/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 23:42:21
 * @description 费用测试数据
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
  code: 'FYXM01',
  name: '材料成本',
  taxRateName: '',
  inventoryCost: '材料费用类',
  description: '',
  isDefault: true
}, {
  code: 'FYXM02',
  name: '运费',
  taxRateName: '',
  inventoryCost: '',
  description: '',
  isDefault: true
}, {
  code: 'FYXM03',
  name: '关税',
  taxRateName: '',
  inventoryCost: '',
  description: '',
  isDefault: false
}, {
  code: 'FYXM04',
  name: '委外加工费',
  taxRateName: '',
  inventoryCost: '加工费用类',
  description: '',
  isDefault: true
}, {
  code: 'FYXM05',
  name: '组装费用',
  taxRateName: '',
  inventoryCost: '组装费用类',
  description: '',
  isDefault: true
}, {
  code: 'FYXM06',
  name: '拆卸费用',
  taxRateName: '',
  inventoryCost: '拆卸费用类',
  description: '',
  isDefault: true
}, {
  id: '7',
  code: 'FYXM07',
  name: '工资',
  taxRateName: '',
  inventoryCost: '',
  description: '',
  isDefault: false
}, {
  code: 'FYXM08',
  name: '市场活动费',
  taxRateName: '',
  inventoryCost: '',
  description: '指促销活动时的市场费用',
  isDefault: false
}]);