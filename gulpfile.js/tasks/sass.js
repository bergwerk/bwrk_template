var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var errorHandler = require('../lib/handleErrors');
var config = require('../config/sass');
var gulpif = require('gulp-if');
var postcss = require('gulp-postcss');
var csswring = require('csswring');

gulp.task('sass', function () {
    var production = process.env.NODE_ENV === 'production';

    return gulp.src(config.src)
        .pipe(sourcemaps.init())
        .pipe(sass(config.settings))
        .on('error', errorHandler)
        .pipe(postcss([autoprefixer(config.autoprefixer)]))
        .pipe(gulpif(!production, sourcemaps.write()))
        .pipe(gulpif(production, postcss([csswring()])))
        .pipe(gulp.dest(config.dest))
});
