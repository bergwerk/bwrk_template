var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('scripts', scriptsTask);

function scriptsTask() {
	var compileScripts = function (files, targetFile) {

		switch (output) {
			case 'normal':
				gulp.src(files)
					.pipe(plumber())
					.pipe(sourcemaps.init())
					.pipe(babel())
					.pipe(concat(targetFile + '.js'))
					.pipe(sourcemaps.write('./'))
					.pipe(gulp.dest(destinationPath + 'js'));
				break;
			case 'minified':
				gulp.src(files)
					.pipe(plumber())
					.pipe(sourcemaps.init())
					.pipe(babel())
					.pipe(concat(targetFile + '.js'))
					.pipe(uglify())
					//.pipe(rename({suffix: '.min'}))
					.pipe(sourcemaps.write('./'))
					.pipe(gulp.dest(destinationPath + 'js'));
				break;
		}

	};

	compileScripts(jsFilesApp, 'app');
}