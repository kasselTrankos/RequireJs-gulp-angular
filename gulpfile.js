var gulp = require('gulp'),
  hmr = require('./tasks/hmr');
gulp.task('default', ['watch:hot-reload-front-end']);
