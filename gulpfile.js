var gulp = require('gulp'),
  connect = require('./tasks/connect'),
  hmr = require('./tasks/hmr');
gulp.task('default', ['watch:hot-reload-front-end', 'connect']);
