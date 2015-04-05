/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 22:12:57
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;

entities = module.exports = new Entities([{
    materialCode:'102',
    materialName:'物料二',
    creater:'demo',
    createDate:'2014/1/6',
    modifier:'demo',
    modifiedDate:'2014/1/6'
  },{
    materialCode:'BT2',
    materialName:'BT2',
    creater:'demo',
    createDate:'2014/1/6',
    modifier:'demo',
    modifiedDate:'2014/1/6'
  }])
