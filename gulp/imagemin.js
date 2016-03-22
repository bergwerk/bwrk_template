var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('img', imageTask);

function imageTask() {
	var compileImages = function(destPath) {
		gulp.src(sourcePath + 'assets/img/*')
			.pipe(imagemin({
				progressive: true,
				use: [pngquant()]
			}))
			.pipe(gulp.dest(destPath + '/img'));
	};

	compileImages('public/');
}



