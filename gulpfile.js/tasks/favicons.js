var browserSync = require('browser-sync');
var config = require('../config');
var faviconConfig = require('../config/favicons');
var gulp = require('gulp');
var favicons = require('gulp-favicons');

gulp.task('favicons', function () {
    gulp.src(config.assetDirectory + '/Icons/favicon.png')
        .pipe(favicons(faviconConfig))
        .pipe(gulp.dest(config.publicDirectory + '/Icons'));
});
