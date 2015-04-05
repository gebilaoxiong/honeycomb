/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 21:19:59
 * @description
 */
define([
  'project/Foundation/Department/List/meta/filed',
  'project/Foundation/Department/List/data/gridStore'
], function(filed, gridStore) {
  return {
    type: 'DepartmentGridPanel',

    recordType: 'DepartmentRecord',

    properties: filed,

    store: gridStore
  }
});