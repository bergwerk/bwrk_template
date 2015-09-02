// Base Url
var baseUrl = '';

// Gulp Modules
var gulp = require('gulp'),
	iconfont = require('gulp-iconfont'),
	consolidate = require('gulp-consolidate'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
	path = require('path'),
	watch = require('gulp-watch'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
    favicons = require('gulp-favicons');

var onError = function (event)
{
	return gulp.src(event.path)
		.pipe(refresh(lrserver));
};

var defaultTasks = [
	'styles',
	'scripts',
	'watch'
];

var jsFiles = [

	// Basic Libraries
	baseUrl + '/Resources/Private/Src/JavaScript/libs/basic/jquery.min.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/basic/jquery.noConflict.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/basic/modernizr.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/basic/fastclick.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/basic/ssm.js',

	// Foundation Libraries
	baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.abide.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.accordion.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.alert.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.clearing.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.dropdown.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.equalizer.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.interchange.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.joyride.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.magellan.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.offcanvas.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.orbit.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.reveal.js',
	//baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.slider.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.tab.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.tooltip.js',
	baseUrl + '/Resources/Private/Src/JavaScript/libs/foundation/foundation.topbar.js',

	// Global Stuff
	baseUrl + '/Resources/Private/Src/JavaScript/global/*.js',

	// Custom Modules
	baseUrl + '/Resources/Private/Src/JavaScript/modules/*.js'
];

gulp.task('styles', stylesTask);

gulp.task('scripts', scriptsTask);

gulp.task('icons', iconsTask);

gulp.task('favicons', favicon);

gulp.task('watch', watchTask);

gulp.task('default', defaultTasks);


function watchTask()
{
	gulp.watch(baseUrl + '/Resources/Private/Src/**/*.scss', ['styles'], onError);
	gulp.watch(jsFiles, ['scripts']);
}

function iconsTask()
{
	gulp.src([baseUrl + '/Resources/Private/Assets/Svg/*.svg'])
		.pipe(iconfont({
			fontName: 'icon',
			appendCodepoints: true
		}))
		.on('codepoints', function (codepoints, options)
		{
			gulp.src(baseUrl + '/Resources/Private/Src/Scss/template/icons.scss')
				.pipe(consolidate('lodash', {
					glyphs: codepoints,
					fontName: 'icon',
					fontPath: '/Resources/Public/Fonts/generated',
					className: 'icon'
				}))
				.pipe(gulp.dest(baseUrl + '/Resources/Private/Src/Scss/generated/'));
		})
		.pipe(gulp.dest(baseUrl + '/fonts/'));
}

function stylesTask()
{
	var compileStyles = function (_baseName)
	{
		gulp.src([baseUrl + '/Resources/Private/Src/Scss/' + _baseName + '.scss'])
			.pipe(plumber())
			.pipe(sass({outputStyle: 'expanded'}))
			.pipe(gulp.dest(baseUrl + '/Resources/Public/Css'))
			.pipe(rename({suffix: '.min'}))
			.pipe(sass({outputStyle: 'compressed'}))
			.pipe(gulp.dest(baseUrl + '/Resources/Public/Css'));
	};

	compileStyles('app');
	compileStyles('print');
	compileStyles('rte_css');
}

function scriptsTask()
{
	gulp.src(jsFiles)
		.pipe(plumber())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(baseUrl + '/Resources/Public/JavaScript'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(baseUrl + '/Resources/Public/JavaScript'));
}

function favicon()
{
    gulp.src([baseUrl + '/Resources/Private/Assets/Icons/favicon.png'])
        .pipe(favicons({
            files: {
                src: baseUrl + '/Resources/Private/Assets/Icons/favicon.png',
                dest: '../../../Public/Icons',
                iconsPath: '/Icons/',
                html: '/dev/null'
            },
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: false,
                coast: true,
                favicons: true,
                firefox: true,
                opengraph: true,
                windows: false,
                yandex: false
            },
            settings: {
                logging: false,
                vinylMode: true
            }
        }))
        .pipe(gulp.dest('./'));
}