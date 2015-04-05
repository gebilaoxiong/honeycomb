/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-25 03:16:55
 * @description 默认控制器
 */
var Controller = require('express-mvc').Controller,
  HomeController;

HomeController = module.exports = Controller.define();

/*首页*/
HomeController.defineAction('index', function() {
  
  this.fileResult('views/index.html');

}, 'GET');