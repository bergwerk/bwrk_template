var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var config = require('../config/bower-copy');
var gulp = require('gulp');

gulp.task('bower-copy', function (cb) {
    config.forEach(function (item) {
        gulp.src(item.src)
            .pipe(changed(item.dest))
            .pipe(gulp.dest(item.dest))
            .pipe(browserSync.reload({stream: true}));
    });
    return cb();
});
