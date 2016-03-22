var gulp = require('gulp');

var defaultTasks = [
    'styles',
    'scripts',
    //'jade',
    'watch'
];

gulp.task('default', defaultTasks);