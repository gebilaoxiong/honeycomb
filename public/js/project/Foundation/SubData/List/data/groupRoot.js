/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:18:43
 * @description
 */
define({
  id: 0,
  text: '全部',
  expanded: true,
  leaf: false,
  children: [{
    id: 1,
    text: '人力资源',
    leaf: false,
    children: [{
      id: 2,
      text: '汇报类型',
      leaf: true
    }, {
      id: 3,
      text: '任职类型',
      leaf: true
    }, {
      id: 4,
      text: '性别',
      leaf: true
    }, {
      id: 5,
      text: '证件类型',
      leaf: true
    }]
  }, {
    id: 6,
    text: '财务会计',
    leaf: false,
    children: [{
      id: 7,
      text: '关联类型',
      leaf: true
    }]
  }, {
    id: 8,
    text: '供应链',
    leaf: false,
    children: [{
      id: 9,
      text: '公告类别',
      leaf: true
    }]
  }, {
    id: 10,
    text: '生产制造',
    leaf: false,
    children: [{
      id: 11,
      text: '产地',
      leaf: true
    }]
  }, {
    id: 12,
    text: '基础管理',
    leaf: false,
    children: [{
      id: 13,
      text: '国家',
      leaf: true
    }]
  }]
})