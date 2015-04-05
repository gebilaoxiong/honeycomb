/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-09 17:01:05
 * @description 
 */
var Entities = require('express-mvc').Entities,
  entities;


entities = module.exports = new Entities([{
    createOrg: '蓝海柴油机本部',
    useOrg: '蓝海柴油机本部',
    account: '6225888888',
    accountName: '蓝海柴油机本部美元户',
    depositBank: '中国银行南山支行(美元户)',
    bank: '',
    handInMoney: false,
    handInType: '全额上划',
    handInMoney: 0,
    balance: 0,
    minHandInMoney: 0,
    dataState: '已审核',
    disabled: false,
    accountAttribute: '收支',
    internalAccount: '',
    eBank: false
  }, {
    createOrg: '蓝海柴油机本部',
    useOrg: '蓝海柴油机本部',
    account: '6225888888',
    accountName: '蓝海柴油机本部人民币户',
    depositBank: '中国银行南山支行(人民币户)',
    bank: '',
    handInMoney: false,
    handInType: '全额上划',
    handInMoney: 0,
    balance: 0,
    minHandInMoney: 0,
    dataState: '已审核',
    disabled: false,
    accountAttribute: '收支',
    internalAccount: '',
    eBank: false
  }]);
