/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-05-18 23:16:20
 * @description
 */
define([
  'project/Foundation/BusinessWorker/List/meta/filed',
  'project/Foundation/BusinessWorker/List/data/gridStore'
], function(filed, store) {
  return {

    type: 'BusinessWorkerGridPanel',

    recordType: 'BusinessWorkerRecord',

    properties: filed,

    store: store
  }
});