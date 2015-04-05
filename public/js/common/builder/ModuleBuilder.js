/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-04-12 01:29:31
 * @description 模块类型建造者
 */
define([
  'controls',
  'infrastructure/builder/BaseBuilder',
  'common/widget/layout/FitWidthLayout'
], function($, BaseBuilder) {

  return BaseBuilder.extend('Module', {

    extendType: undefined,

    /**
     * 构造类成员
     * 覆写buildMembers
     * @param  {object} overwrite 覆写对象
     * @param  {object} meta
     * @return {object}
     */
    buildMembers: function(overwrite, meta) {
      Q.extend(overwrite, meta);
    }
  });
});