/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/EmployeePost/List/meta/filed',
  'project/Foundation/EmployeePost/List/data/gridStore'
], function(filed, gridStore) {
  return {

    type: 'EmployeePostGridPanel',

    recordType: 'EmployeePostRecord',

    properties: filed,

    store: gridStore
  }
});
