define([
  'project/Foundation/Employee/list/meta/filed',
  'project/Foundation/Employee/list/data/store'
], function(filed, store) {
  return {

    type: 'EmployeeGridPanel',

    recordType: 'EmployeeRecord',

    properties: filed,

    store: store
  }
});