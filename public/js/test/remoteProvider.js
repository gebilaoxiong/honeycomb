/**
 *
 * @authors 熊洋 (xywindows@gmail.com)
 * @date    2014-06-05 16:08:35
 * @description
 */
define(['controls'], function($) {
  var remotingProvider,loadProvider;

  remotingProvider = new $.direct.RemotingProvider({

    url: 'Home/Router',

    actions: {
      User: [{
        name: 'GetUserList',
        len: 1
      }]
    }
  });

  $.Direct.addProvider(remotingProvider)

  loadProvider = new $.direct.RemotingProvider({

    url: 'Home/Router',

    actions: {
      User: [{
        name: 'GetUser',
        len: 0
      }]
    }
  });

  $.Direct.addProvider(loadProvider)


})