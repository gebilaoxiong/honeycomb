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
    text: '财务会计',
    leaf: false,
    children: [{
      id: 2,
      text: '总账',
      leaf: false,
      children: [{
        id: 10,
        text: '科目',
        leaf: true
      }, {
        id: 11,
        text: '账簿',
        leaf: true
      }, {
        id: 12,
        text: '会计日历',
        leaf: true
      }, {
        id: 13,
        text: '会计要素',
        leaf: true
      }, {
        id: 14,
        text: '币别',
        leaf: true
      }, {
        id: 15,
        text: '费用项目',
        leaf: true
      }]
    }, {
      id: 3,
      text: '报表',
      leaf: true
    }, {
      id: 4,
      text: '只能会计平台',
      leaf: true
    }, {
      id: 5,
      text: '应收款管理',
      leaf: true
    }, {
      id: 6,
      text: '应付款管理',
      leaf: true
    }, {
      id: 7,
      text: '发票管理',
      leaf: true
    }, {
      id: 8,
      text: '出纳管理',
      leaf: true
    }, {
      id: 9,
      text: '出纳管理',
      leaf: true
    }]
  }, {
    id: 16,
    text: '系统管理',
    leaf: false,
    children: [{
      id: 17,
      text: '短信发送',
      leaf: true
    }]
  }]
})