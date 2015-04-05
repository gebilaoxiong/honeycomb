/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description 
 */
define([
  'project/Foundation/OtherCompany/List/meta/filed',
  'project/Foundation/OtherCompany/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'OtherCompanyGridPanel',

    recordType: 'OtherCompanyRecord',

    properties: filed,

    store: store
  }
});

