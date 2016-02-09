define(['angular', '#allControllers', 'hmr'], function (angular, controllers, hmr) {
  console.log('lo ado is real', controllers);
  hmr.init();
  window.app = angular.module('ats.main', [], function($controllerProvider){
    window.controllerProvider = $controllerProvider;
  })
  .controller('appController', ['$scope', controllers.AppController])

  app.init = function () {

    angular.bootstrap(document, ['ats.main']);
  };

  return window.app;
});
