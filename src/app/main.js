(function () {
  //por q un clouser sure you'll know
  window.startDate = Date.now(); //this is for debugging performance of application
  console.log('loading app/js/main.js ---> (0) ---> time:', (Date.now() - window.startDate));
  requirejs.config({
    enforceDefine: false,
    waitSeconds: 7,
    baseUrl: '/app',
    paths: {
      '#allComponents': 'components/',
      '#allControllers': 'meta/allControllers',
      socketio: '../../bower_components/socket.io-client/socket.io',
      async: '../../bower_components/async/lib/async',
      backbone: '../../bower_components/backbone/backbone',
      requirejs: '../../bower_components/requirejs/require',
      underscore: '../../bower_components/underscore/underscore',
      angular: '../../bower_components/angular/angular',
      angularAMD: '../../bower_components/angularAMD/angularAMD',
      hmr: 'hotReload/hotReloadingHandler',
      hmreplace: 'hotReload/hotReloader'
    },
    shim: {
      angular: {
        exports : 'angular'
      }
    },
    packages: [

    ]
  });
  require(['app'], function (app) {
    // initialisation code defined within app.js
    app.init();
  });
})();
