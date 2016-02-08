define(['angular', '#allControllers', 'hmr'], function (angular, controllers, hmr) {
  console.log('lo ado is real', controllers);
  hmr.init();
  var app = angular.module('ats.main', [])
    .controller('appController', ['$scope', controllers.AppController])

  app.init = function () {
    console.log(' init ', document);
    angular.bootstrap(document, ['ats.main']);
  };

  return app;
});
