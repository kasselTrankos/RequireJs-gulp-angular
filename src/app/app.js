define(['angular'], function (angular) {
  console.log('lo ado is real');
  function init(){
    console.log(' initializado : : : : :');
  }
  var app = angular.module('ats.main', []);

  app.init = function () {
    angular.bootstrap(document, ['ats.main']);
  };

  return app;
});
