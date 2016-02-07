var gulp = require('gulp'),
  socketio = require('socket.io');
var PORT = process.env.PORT || 3002;
gulp.task('watch:hot-reload-front-end', function () {
  var io = socketio.listen(PORT, function (err, msg, msg2) {
    if (err) {
      console.error(err);
    }
    else if (msg) {
      console.log(msg);
    }
  });
  io.on('connection', function (socket) {
    console.log(colors.yellow('Gulp hot reload: a developer client connected'));
    socket.on('disconnect', function () {
      console.log(colors.yellow('Gulp hot reload: a developer client disconnected'));
    });
  });
  gulp.watch('./src/app/**/*.js').on('change', function (file) {
    console.log(' wich file is changed', file);
  });
});
