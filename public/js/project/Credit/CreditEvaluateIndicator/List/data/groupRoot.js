/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 21:40:52
 * @description
 */
define({
  id: 0,
  text: '全部',
  expanded: true,
  children: [{
    id: 1,
    text: '信用评估指标1',
    children: [{
      id: 2,
      text: '品质特性评价',
      leaf: true
    }, {
      id: 3,
      text: '信用履约评价',
      leaf: true
    }, {
      id: 4,
      text: '偿债能力评价',
      leaf: true
    }, {
      id: 5,
      text: '资本状况评价',
      leaf: true
    }, {
      id: 6,
      text: '盈利能力评价',
      leaf: true
    }]
  },{
    id: 7,
    text: '信用评估指标2',
    children: [{
      id: 8,
      text: '企业基本情况',
      leaf: true
    }, {
      id: 9,
      text: '发展前景',
      leaf: true
    }, {
      id: 10,
      text: '管理水平',
      leaf: true
    }, {
      id: 11,
      text: '投保/担保情况',
      leaf: true
    }, {
      id: 12,
      text: '盈利能力评价',
      leaf: true
    }, {
      id: 13,
      text: '信誉状况',
      leaf: true
    }]
  }]
});