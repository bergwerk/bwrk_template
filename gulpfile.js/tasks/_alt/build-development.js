var gulp = require('gulp');
var gulpSequence = require('gulp-sequence').use(gulp);

gulp.task('build:development', function (cb) {
    gulpSequence('clean', ['bower-copy', 'fonts', 'images'], ['sass', 'webpack:development'], ['watch', 'browserSync'], cb);
});
