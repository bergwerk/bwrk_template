// Base Url
var baseUrlJs = 'Resources/Private/Src/JavaScript/';

// Gulp Modules
var gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    consolidate = require('gulp-consolidate'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    path = require('path'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    favicons = require('gulp-favicons');

var defaultTasks = [
    'styles',
    'scripts',
    'watch'
];

var jsFilesApp = [
    // Basic Libraries
    baseUrlJs + 'libs/basic/jquery.min.js',
    //baseUrlJs + 'libs/basic/jquery.noConflict.js',
    baseUrlJs + 'libs/basic/modernizr.js',
    baseUrlJs + 'libs/basic/fastclick.js',
    baseUrlJs + 'libs/basic/ssm.js',

    // Foundation Libraries
    baseUrlJs + 'libs/foundation/foundation.js',
    //baseUrlJs + 'libs/foundation/foundation.abide.js',
    //baseUrlJs + 'libs/foundation/foundation.accordion.js',
    baseUrlJs + 'libs/foundation/foundation.alert.js',
    //baseUrlJs + 'libs/foundation/foundation.clearing.js',
    baseUrlJs + 'libs/foundation/foundation.dropdown.js',
    //baseUrlJs + 'libs/foundation/foundation.equalizer.js',
    //baseUrlJs + 'libs/foundation/foundation.interchange.js',
    //baseUrlJs + 'libs/foundation/foundation.joyride.js',
    //baseUrlJs + 'libs/foundation/foundation.magellan.js',
    //baseUrlJs + 'libs/foundation/foundation.offcanvas.js',
    //baseUrlJs + 'libs/foundation/foundation.orbit.js',
    //baseUrlJs + 'libs/foundation/foundation.reveal.js',
    //baseUrlJs + 'libs/foundation/foundation.slider.js',
    baseUrlJs + 'libs/foundation/foundation.tab.js',
    baseUrlJs + 'libs/foundation/foundation.tooltip.js',
    baseUrlJs + 'libs/foundation/foundation.topbar.js',

    // Global Stuff
    baseUrlJs + 'global/*.js',

    // Custom Modules
    baseUrlJs + 'modules/*.js'
];

gulp.task('styles', stylesTask);

gulp.task('scripts', scriptsTask);

gulp.task('icons', iconsTask);

gulp.task('favicon', faviconTask);

gulp.task('watch', watchTask);

gulp.task('default', defaultTasks);

function watchTask() {
    gulp.watch('Resources/Private/Src/Scss/**/*.scss', ['styles']);
    gulp.watch(jsFilesApp, ['scripts']);
}

function iconsTask() {
    gulp.src(['Resources/Private/Assets/Svg/*.svg'])
        .pipe(iconfont({
            fontName: 'icon',
            appendCodepoints: true
        }))
        .on('codepoints', function (codepoints, options) {
            gulp.src('Resources/Private/Src/Scss/template/icons.scss')
                .pipe(consolidate('lodash', {
                    glyphs: codepoints,
                    fontName: 'icon',
                    fontPath: '../Fonts/generated/',
                    className: 'icon'
                }))
                .pipe(gulp.dest('Resources/Private/Src/Scss/generated'));
        })
        .pipe(gulp.dest('Resources/Public/Fonts/generated'));
}

function stylesTask() {
    var compileStyles = function (_baseName) {
        gulp.src(['Resources/Private/Src/Scss/' + _baseName + '.scss'])
            .pipe(plumber())
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest('Resources/Public/Css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(gulp.dest('Resources/Public/Css'));
    };

    compileStyles('app');
    compileStyles('print');
    compileStyles('rte_css');
}

function scriptsTask() {
    var compileScripts = function (files, targetFile) {
        gulp.src(files)
            .pipe(plumber())
            .pipe(concat(targetFile + '.js'))
            .pipe(gulp.dest('Resources/Public/JavaScript'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('Resources/Public/JavaScript'));
    };

    compileScripts(jsFilesApp, 'app');
}

function faviconTask() {
    gulp.src(['Resources/Private/Assets/Icons/faviconTask.png'])
        .pipe(favicons({
            files: {
                src: 'Resources/Private/Assets/Icons/faviconTask.png',
                dest: 'Resources/Public/Icons',
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
                vinylMode: true,
                background: false
            }
        }))
        .pipe(gulp.dest('Resources/Public/Icons'));
}

