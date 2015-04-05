/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:16:23
 * @description
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
  materialCode: '102',
  createDate: '2014/1/6',
  modifier: 'demo',
  modifiedDate: '2014/1/6',
  materialName: '物料二',
  secondaryAttribute: '等级'
}, {
  materialCode: '102',
  createDate: '2014/1/6',
  modifier: 'demo',
  modifiedDate: '2014/1/6',
  materialName: '物料二',
  secondaryAttribute: '产地'
}, {
  materialCode: 'BT2',
  createDate: '2014/1/6',
  modifier: 'demo',
  modifiedDate: '2014/1/6',
  materialName: 'BT2',
  secondaryAttribute: '等级'
}, {
  materialCode: 'BT2',
  createDate: '2014/1/6',
  modifier: 'demo',
  modifiedDate: '2014/1/6',
  materialName: 'BT2',
  secondaryAttribute: '产地'
}])