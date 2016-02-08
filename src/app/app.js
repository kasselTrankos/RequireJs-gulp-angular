define(['angular', 'controller/AppController'], function (angular, AppController) {
  console.log('lo ado is real');

  var app = angular.module('ats.main', [])
    .controller('appController', ['$scope', AppController])

  app.init = function () {
    console.log(' init ', document);
    angular.bootstrap(document, ['ats.main']);
  };

  return app;
});
