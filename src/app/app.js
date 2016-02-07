define(['angular'], function (angular) {
  console.log('lo ado is real');

  var app = angular.module('ats.main', [])
  .controller('WelcomeController', function($scope) {
      $scope.greeting = 'Welcome!';
  });

  app.init = function () {
    console.log(' init ', document);
    angular.bootstrap(document, ['ats.main']);
  };

  return app;
});
