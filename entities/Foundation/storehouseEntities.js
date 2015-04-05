/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 21:54:59
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  code: 'CK001',
  name: '销售成品仓',
  address: 'ssss',
  manager: '张三',
  attribute: '普通仓库',
  dataState: '已审核',
  disabled: false,
  inventoryStateTypes: '可用,待检,冻结,退回冻结,在途,收货冻结,废品,不良',
  allowNegative: true,
  group: '',
  defaultInventoryState: '可用',
  defaultReceiveState: '待检',
  enablePositionManagement: false
}]);