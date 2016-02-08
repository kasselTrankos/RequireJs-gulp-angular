define(function () {
  var hotReloadSimple = function (item, callback) {
    require.undef(item);
    require([item], function (file) {
      callback(null, file);
    });
  };
  return {
    hotReloadSimple: hotReloadSimple
  }
});
