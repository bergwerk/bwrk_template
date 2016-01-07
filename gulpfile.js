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
    sourcemaps = require('gulp-sourcemaps'),
    favicons = require('gulp-favicons');

var environment = 'typo3';

var config;

switch (environment) {
    case 'src-kit':
        config = [
            sourcePath = 'src/',
            destinationPath = 'dist/'

        ];
        break;

    case 'typo3':
        config = [
            sourcePath = 'Resources/Private/src/',
            destinationPath = 'Resources/Public/'
        ];
        break;
}

var jsFilesApp = [

    // Jquery
    sourcePath + 'bower_components/jquery/dist/jquery.min.js',

    // Fastclick
    //sourcePath + 'bower_components/fastclick/lib/fastclick.js',

    // Picturefill
    //sourcePath + 'bower_components/picturefill/dist/picturefill.js',

    // SSM
    //sourcePath + 'bower_components/SimpleStateManager/src/ssm.js',

    // Slick
    //sourcePath + 'bower_components/slick-carousel/slick/slick.min.js',

    // SinglePageNav
    //sourcePath + 'bower_components/single-page-nav/jquery.singlePageNav.js',

    // Foundation
    sourcePath + 'bower_components/foundation-sites/js/foundation.core.js',

    sourcePath + 'bower_components/foundation-sites/js/foundation.util.box.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.keyboard.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.mediaQuery.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.motion.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.nest.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.timerAndImageLoader.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.touch.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.util.triggers.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.abide.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.accordion.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.accordionMenu.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.drilldown.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.dropdown.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.dropdownMenu.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.equalizer.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.interchange.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.magellan.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.offcanvas.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.orbit.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.responsiveMenu.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.responsiveToggle.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.reveal.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.slider.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.sticky.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.tabs.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.toggler.js',
    sourcePath + 'bower_components/foundation-sites/js/foundation.tooltip.js',

    // Own stuff
    sourcePath + 'js/**/*.js'
];

var defaultTasks = [
    'styles',
    'scripts',
    'watch'
];

gulp.task('default', defaultTasks);
gulp.task('watch', watchTask);
gulp.task('styles', stylesTask);
gulp.task('scripts', scriptsTask);
gulp.task('icons', iconsTask);
gulp.task('favicon', faviconTask);

function watchTask() {
    gulp.watch(sourcePath + 'scss/**/*.scss', ['styles']);
    gulp.watch(jsFilesApp, ['scripts']);
}

function stylesTask() {
    var compileStyles = function (baseName) {
        gulp.src([sourcePath + 'scss/' + baseName + '.scss'])
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'css'))
    };

    compileStyles('app');
    compileStyles('rte');
    compileStyles('print');
}

function scriptsTask() {
    var compileScripts = function (files, targetFile) {
        gulp.src(files)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(concat(targetFile + '.js'))
            .pipe(uglify())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(destinationPath + 'js'));
    };

    compileScripts(jsFilesApp, 'app');
}

function iconsTask() {
    gulp.src([sourcePath + 'assets/svg/use/*.svg'])
        .pipe(iconfont({
            fontName: 'icon',
            appendCodepoints: true
        }))
        .on('codepoints', function (codepoints, options) {
            gulp.src(sourcePath + 'scss/templates/_icons.scss')
                .pipe(consolidate('lodash', {
                    glyphs: codepoints,
                    fontName: 'icon',
                    fontPath: '..fonts/generated/',
                    className: 'icon'
                }))
                .pipe(gulp.dest(sourcePath + 'scss/generated'));
        })
        .pipe(gulp.dest(destinationPath + 'fonts/generated'));
}


function faviconTask() {
    gulp.src([sourcePath + 'assets/favicon/favicon.png'])
        .pipe(favicons({
            files: {
                src: sourcePath + 'assets/favicon/favicon.png',
                dest: destinationPath + 'assets/favicon',
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
        .pipe(gulp.dest(destinationPath + 'assets/favicon'));
}