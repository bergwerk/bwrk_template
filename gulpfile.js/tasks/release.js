var gulp = require('gulp');
var zip = require('gulp-zip');
var config = require('../config');
var releaseConfig = require(('../config/release'));
var archiveName = require('../lib/archiveName');
var path = require('path');

gulp.task('release', ['build:production'], function (cb) {
    var extension_dir = path.resolve(__dirname + '/../../').split(path.sep).pop() || 'site_package';
    return gulp.src(releaseConfig.paths, releaseConfig.options)
      .pipe(zip(archiveName(extension_dir)))
      .pipe(gulp.dest('..'));
});
