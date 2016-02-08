define(['angular', 'controller/AppController', 'hmr'], function (angular, AppController, hmr) {
  console.log('lo ado is real');
  hmr.init();
  var app = angular.module('ats.main', [])
    .controller('appController', ['$scope', AppController])

  app.init = function () {
    console.log(' init ', document);
    angular.bootstrap(document, ['ats.main']);
  };

  return app;
});
