/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-11 00:34:13
 * @description 
 */
define(function() {
  return [{
    //ID
    name: 'id',
    mapping: 'id',
    type: 'string',
    /*是否是主键*/
    isIdentity: true,
    /*是否生成列*/
    isColumn: false
  }, {
    //广播标题
    name: 'title',
    mapping: 'title',
    type: 'string',

    header: '广播标题',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  },  {
    //广播内容
    name: 'content',
    mapping: 'content',
    type: 'string',
    width:260,

    header: '广播内容',
    sortable: true
  }, {
    //消息失效时间
    name: 'invalidDate',
    mapping: 'invalidDate',
    type: 'string',
    width:180,

    header: '消息失效时间',
    sortable: true,

    /*是否是默认过滤字段（filter Panel）*/
    isDefaultFilter: true
  }, {
    //创建日期
    name: 'createDate',
    mapping: 'createDate',
    type: 'string',
    width:180,

    header: '创建日期',
    sortable: true
  }];
})


