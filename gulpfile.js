var gulp = require('gulp'),
  connect = require('./tasks/browser-sync'),
  hmr = require('./tasks/hmr');
gulp.task('default', ['watch:hot-reload-front-end', 'connect-server']);
