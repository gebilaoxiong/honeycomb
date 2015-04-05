/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-03 00:24:59
 * @description
 */
define(['controls'], function($) {

  var tree = new $.tree.Panel({
    lines: false
  });

  var root = new $.tree.AsyncNode({
    text: 'sss',
    children: [{
      text: '01',
      children: [{
        qtip: '呵呵呵',
        text: '01-01',
        leaf: true //这里为true代表他下面已经没有子节点，不需要加载出来
      }, {
        text: '01-02',
        children: [{
          text: '01-02-01',
          leaf: true
        }, {
          text: '01-02-02',
          leaf: true
        }]
      }, {
        text: '01-03',
        leaf: true,
        href: "http://www.baidu.com", //通过点击节点，可以链接到一个地址
        hrefTarget: '_blank'
      }]
    }, {
      text: '02',
      leaf: true,
      icon: 'user_female.png' //自定义节点的图标
    }]
  });
  tree.setRootNode(root);

  tree.bind('afterlayout',function(){console.log(123)})

  tree.render(document.body);


  tree.expandAll(); //展开所有节点


});