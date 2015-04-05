/**
 * 
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-07-10 18:27:08
 * @description 
 */
define([
  'project/Credit/CreditRating/List/meta/filed',
  'project/Credit/CreditRating/List/data/gridStore'
], function(filed, gridStore) {
  return {
    type: 'CreditRatingGridPanel',

    recordType: 'CreditRatingRecord',

    properties: filed,

    store: gridStore
  }
});
