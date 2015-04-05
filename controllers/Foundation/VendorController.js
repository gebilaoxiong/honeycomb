/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-08 22:45:08
 * @description
 */
var BaseController = require('../../util/BaseController'),
  Controller, record, category;

record = {
  id: '1',

  name: '长安制造',

  code: 'V00003',

  createOrg: {
    id: '2',
    name: '蓝海柴油机本部'
  },

  useOrg: {
    id: '1',
    name: '蓝海机械总公司'
  },

  shortName: '长安',

  country: {
    id: 2,
    name: '中国'
  },

  region: {
    id: 1,
    name: '华北区'
  },

  mailingAddress: '杭州市十六环外',

  language: '中文',

  website: 'http://www.cqborn.cn/',

  industry: {
    id: 1,
    name: 'IT通信'
  },

  established: '2003/01/01',

  corp: '马云',

  registerMoney: '5000',

  businessRegistrationId: '2233',

  businessCertificateId: '500101190001233123',

  registerAddress: '杭州',

  responsibleDepartment: {
    id: 1,
    name: '事业部'
  },

  leader: {
    id: 1,
    name: '杨曼'
  },

  vendorCategory: {
    id: 1,
    name: '考察供应商'
  },

  vendorType: {
    id: 1,
    name: '服务'
  },

  vendorLevel: {
    id: 1,
    name: '战略供应商'
  },

  companyCategory: {
    id: 1,
    name: '运输商'
  },

  companyNature: {
    id: 1,
    name: '中外合资企业'
  },

  companyScale: {
    id: 1,
    name: '特大型企业'
  },

  companyScale: {
    id: 1,
    name: '特大型企业'
  },

  dockingOrg: {
    id: 1,
    name: '蓝海广州办事处'
  },

  contacter: [{
    id: 1,
    name: '马云',
    position: 'CEO',
    tel: '023-68133888',
    phone: '+861888888888',
    fex: '023-68133888',
    email: 'xywindows@gmail.com'
  }, {
    id: 2,
    name: '周爱民',
    position: '前端架构师',
    tel: '023-68133888',
    phone: '+861888888888',
    fex: '023-68133888',
    email: 'xywindows@gmail.com'
  }],

  purchasingGroup:{
    id:1,
    name:'西铁城库采购组'
  },

  summaryCompany:{
    id:1,
    name:'长安制造'
  },

  salesPrice:{
    id:1,
    name:'批发价目表'
  },

  salesDiscount:{
    id:1,
    name:'批发折扣'
  },

  provider:{
    id:1,
    name:'长安制造'
  },

  dockingCustomer:{
    id:1,
    name:'蓝海机械总公司'
  },

  paymentsCurrency:{
    id:1,
    name:'人民币'
  },

  paymentsType:{
    id:1,
    name:'现金'
  },

  receiptCondition:{
    id:1,
    name:'预收30%余款到收款'
  },

  paymentSide:{
    id:1,
    name:'长安制造'
  },

  taxCategory:{
    id:1,
    name:'一般纳税人'
  },

  taxId:'SW00666',

  taxType:{
    id:1,
    name:'公司'
  },

  receiptSide:{
    id:1,
    name:'长安制造'
  },

  invoiceType:{
    id:1,
    name:'普通发票'
  },

  taxRate:{
    id:1,
    name:'3%增值税'
  },

  bank:[{
    id:1,
    country:'中国',
    bank:'建设银行',
    accountID:'6545 8888 8888 888',
    accountName:'长安制造集团',
    currency:'人民币',
    isDefault:true
  },{
    id:2,
    country:'中国',
    bank:'招商银行',
    accountID:'6666 6666 6666 6666',
    accountName:'长安制造集团',
    currency:'人民币',
    isDefault:true
  }],

  address:[{
    id:1,
    code:'0001',
    name:'车间地址',
    contacter:'张朝阳',
    address:'杭州市十六环外1号车间',
    enabled:true,
    tel:'023-6866666',
    phone:'+8615866666666',
    fex:'023-6866666',
    email:'xywindows@gmail.com'
  },{
    id:2,
    code:'0002',
    name:'办公地址',
    contacter:'马云',
    address:'杭州市六环外天王星大厦',
    enabled:true,
    tel:'023-6866666',
    phone:'+8615866666666',
    fex:'023-6866666',
    email:'xywindows@gmail.com'
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

  disabled: false

};


Controller = module.exports = BaseController.define({
  entities: require('../../entities/Foundation/vendorEntities'),

  record: record
});