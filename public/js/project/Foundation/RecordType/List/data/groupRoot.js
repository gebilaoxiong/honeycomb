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
    text: '应收款管理',
    leaf: false,
    children: [{
      id: 2,
      text: '内部应收清理单',
      leaf: true
    }, {
      id: 3,
      text: '应收核销单',
      leaf: true
    }, {
      id: 4,
      text: '其他应收单',
      leaf: true
    }, {
      id: 5,
      text: '应收单',
      leaf: true
    }]
  }, {
    id: 6,
    text: '应付款管理',
    leaf: false,
    children: [{
      id: 7,
      text: '内部应付清理单',
      leaf: true
    }, {
      id: 8,
      text: '应付核销单',
      leaf: true
    }, {
      id: 9,
      text: '其他应付单',
      leaf: true
    }, {
      id: 10,
      text: '应付单',
      leaf: true
    }]
  }]
})