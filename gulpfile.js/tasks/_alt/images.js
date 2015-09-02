var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var config = require('../config/images');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var zopfli = require('imagemin-zopfli');
var mozjpeg = require('imagemin-mozjpeg');
var svgo = require('imagemin-svgo');
var pngquant = require('imagemin-pngquant');
var gulpif = require('gulp-if');

gulp.task('images', function () {
    var production = process.env.NODE_ENV === 'production';

    return gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(gulpif(production, imagemin({
            progressive: true,
            use: [pngquant(), zopfli(config.zopfli), mozjpeg(config.mozjpeg), svgo()]
        })))
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({stream: true}));
});
