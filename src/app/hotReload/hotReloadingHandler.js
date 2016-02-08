define(['socketio', 'hmreplace'], function(io, hmreplace){
  function init(){
    function replaceAll(str, target, replacement) {
      return str.split(target).join(replacement);
    }
    function reconcilePath($filepath,fold1,fold2) {
      var filepath = replaceAll($filepath, '\\', '/');
      var folderz = String(filepath).split('/');

      return folderz[folderz.length-1];
    }
    console.log('start in good part 1');
    socketHotReload = io.connect('http://127.0.0.1:3002');
    socketHotReload.on('error', function socketConnectionErrorCallback(err) {
      console.error('Unable to connect Socket.IO ---->', JSON.stringify(err));
    });
    socketHotReload.on('connect', function (event) {
      console.info('successfully established a working and authorized connection'.toUpperCase());
    });
    socketHotReload.on('disconnect', function (event) {
      console.info('socket disconnected'.toUpperCase());
    });
    socketHotReload.on('.jsx transform error', function (data) {
      window.throwGlobalError(new Error(data));
    });
    socketHotReload.on('hmr-js', function (data) {
      hmreplace.hotReloadSimple(data, function(err,result){
        if(err){
          alert(err);
          return;
        }
        var filename = reconcilePath(data); //you need to implement reconcilePath ?? will bnecessatt
        // var filename = data;
        console.log(filename, result);
        require(['#allControllers'],function(allControllers){ //I have a module '#allViews' that contains all my front-end views
        console.log(allControllers, filename, allControllers[filename]);
          allControllers[filename] = result;
          //Backbone.history.loadUrl(Backbone.history.fragment); //reload the current page (don't need to worry about any other pages)
        });
      });
    });
  }
  return{
    init: init
  };
});
