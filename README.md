# RequireJs-gulp-backbonedm

Intento de llegar a realizar un HMR para angularjs, intento cierto y muy cercano
consigiendo en este momento(10/02/16) que se cambie el scope del controller, como?;
```javascript
window.app._invokeQueue[0][2][1][1] = result;// aqui consigo hacer el update de codigo
angular.injector(['ng', 'ats.main']).invoke(function($compile, $rootScope) {
    $compile(elm)($rootScope);
    $compile(div)(div.scope());//aqui se hace update de scope de controller
    div.scope().$apply()
    $rootScope.$apply();
});
```
Me quedo en el punto de que el controller no hay forma de hacerle un $apply, aún revisando por chrome dev el valor del scope.vm
como el valor injectado/actualizado.
