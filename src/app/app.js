define(['angular'], function (angular) {
  var app = angular.module('ats.main', []);

  app.init = function () {
    angular.bootstrap(document, ['ats.main']);
  };

  return app;
});
