/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-25 22:34:52
 * @description 雇员控制器
 */
var BaseController = require('../../util/BaseController'),
  Controller;


Controller = module.exports = BaseController.define({

  entities: require('../../entities/Foundation/employeeEntities'),

  record: {
    id: '6',

    org: {
      id: '1',
      name: '蓝海机械总公司'
    },

    useOrg: {
      id: '1',
      name: '蓝海机械总公司'
    },

    name: '郭靖',

    code: '0002',

    mobile: '13320288900',

    post: [{
      id: '1',
      post: {
        id: '1',
        name: '公关'
      },
      org: {
        id: '1',
        name: '蓝海机械总公司'
      },
      department:{
        id:'1',
        name:'事业部'
      },
      dutyTime: '2001/1/1',
      disabled: false,
      isPrimaryDuty: true
    }, {
      id: '2',
      post: {
        id: '5',
        name: '销售员'
      },
      org: {
        id: '1',
        name: '蓝海机械总公司'
      },
      department:{
        id:'2',
        name:'工程部'
      },
      dutyTime: '2002/1/1',
      disabled: false,
      isPrimaryDuty: false
    }]
  }
});