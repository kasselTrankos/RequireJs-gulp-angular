define(['socketio'], function(io){
  function init(){
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
  }
  return{
    init: init
  };
});
