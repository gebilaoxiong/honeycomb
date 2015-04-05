/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 22:28:05
 * @description 顾客控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller, record, category;

record = {
  id: '1',

  name: '大宇机械',

  code: 'CUST0005',

  createOrg: {
    id: '2',
    name: '蓝海机械总公司'
  },

  useOrg: {
    id: '2',
    name: '蓝海机械总公司'
  },

  shortName: '大宇',

  contacter: [{
    id: '1',
    name: '李经理',
    position: '采购经理',
    businessPlace: '',
    tell: '010-4428704',
    mobile: '1530506078',
    fax: '',
    email: '',
    isDefault: false
  }, {
    id: '2',
    name: '吴经理',
    position: '主管',
    businessPlace: '',
    tell: '010-425435',
    mobile: '1560405075',
    fax: '',
    email: '',
    isDefault: false
  }],

  bankInfo: [{
    id: '1',
    country: '中国',
    bank: '招行XX支行',
    accountID: 'ZS00111',
    accountName: '月牙',
    currency: '人民币',
    isDefault: false
  }],

  addressInfo: [{
    id: '1',
    code: '0001',
    name: '默认收货地址',
    detailsAddress: '重庆市渝北区新南路',
    advanceDate: 0,
    contacter: '李经理',
    tell: '010-4428704',
    email: 'xywindows@gmail.com',
    isDefaultAddress: true,
    isDefaultBillAddress: true,
    isDefaultPaymentAddress: true,
    enabled: true
  }],

  creater: 'Administrator',

  createDate: '1999/01/01',

  modifier: 'Administrator',

  modifiedDate: '1999/01/02',

  auditor: 'Administrator',

  auditDate: '2014/08/21',

  dataState: '已审核',

  disabler: '',

  disabledDate: '',

  disabled: false,


  settlementCurrency: {
    id: 1,
    name: '美元'
  },
  salesDepartment: {
    id: 3,
    name: '事业部'
  },
  salesGroup: {
    id: 3,
    name: '销售组'
  },
  saler: {
    id: 1,
    name: '杨曼'
  },
  paymentsType: {
    id: 1,
    name: '内部利息结算'
  },
  receiptCondition: {
    id: 1,
    name: '预收30%余款到收款'
  },
  salesPrice: {
    id: 1,
    name: '批发价目表'
  },
  salesDiscount: {
    id: 1,
    name: '批发折扣'
  },
  leadTime: '',
  taxCategory: {
    id: 2,
    name: '一般纳税人'
  },
  invoiceType:{
    id: 2,
    name: '普通发票'
  },
  taxRate:{
    id: 2,
    name: '3%增值税'
  },

  country:{
    id:1,
    name:'中国'
  },
  region:{
    id:1,
    name:'华南区'
  },
  address:'重庆市渝北区新南路',
  postcode:'404000',
  website:'http://www.cctv.com',
  tell:'023-6888888',
  fax:'023-6666666',
  taxId :'50010119898888888801',
  companyCategory:{
    id:1,
    name:'制造商'
  },
  companyNature:{
    id:1,
    name:'外商投资企业'
  },
  companyScale:{
    id:1,
    name:'特大型企业'
  },
  vendor:{
    id:1,
    name:'长安制造'
  },
  groupCustomer:{
    id:1,
    name:'总装事业部'
  },
  customerCategory:{
    id:1,
    text:'普通销售客户'
  },
  org:{
    id:1,
    name:'蓝海广州办事处'
  }
};


category = [{
  id: 1,
  text: '普通销售客户'
}, {
  id: 2,
  text: '寄售客户'
}, {
  id: 3,
  text: '内部结算客户'
}];


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/customerEntities'),
  record: record
});

Controller.defineAction('category', function() {
  var me = this;

  me.jsonResult(category);
}, 'Get')