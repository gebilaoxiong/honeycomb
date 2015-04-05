define(function() {
  /**
   * 页面管理对象
   */

  /*我是缓存*/
  var pageCache = {};

  /**
   * 注册一个页面
   * @param  {ScriptPage} page 页面
   */
  function register(page) {
    if (page.viewportID != undefined) {
      pageCache[page.viewportID] = page;
    }
  }

  /**
   * 反注册一个页面
   * @param  {ScriptPage} page 页面
   */
  function unregister(page) {
    if (page.viewportID != undefined) {
      delete pageCache[page.viewportID];
    }
  }

  /**
   * 根据页面ID获取页面
   * @param  {String} viewportID 页面的ID
   */
  function get(viewportID) {
    console.log(pageCache, viewportID)
    if (viewportID != undefined) {
      return pageCache[viewportID];
    }
  }


  return {
    pageCache: pageCache,
    register: register,
    unregister: unregister,
    get: get
  }
});