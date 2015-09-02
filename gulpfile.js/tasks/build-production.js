var gulp = require('gulp');
var gulpSequence = require('gulp-sequence').use(gulp);

gulp.task('build:production', function (cb) {
    process.env.NODE_ENV = 'production';
    gulpSequence('clean', ['bower-copy', 'fonts', 'images'], ['sass', 'webpack:production'], 'favicons', cb);
});
