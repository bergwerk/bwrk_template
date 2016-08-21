const importPaths = require('./gulp.paths.js');
const path = importPaths.path;

const config = {
	minify: false
};

const files = {
	jsFilesLibUtility: [
		path.toBower + 'jquery/dist/jquery.min.js'
	],

	jsFilesLibBabel: [
		path.toBower + 'foundation-sites/js/foundation.core.js',
		//path.toBower + 'foundation-sites/js/foundation.util.box.js',
		//path.toBower + 'foundation-sites/js/foundation.util.keyboard.js',
		path.toBower + 'foundation-sites/js/foundation.util.mediaQuery.js',
		//path.toBower + 'foundation-sites/js/foundation.util.motion.js',
		//path.toBower + 'foundation-sites/js/foundation.util.nest.js',
		//path.toBower + 'foundation-sites/js/foundation.util.timerAndImageLoader.js',
		//path.toBower + 'foundation-sites/js/foundation.util.touch.js',
		//path.toBower + 'foundation-sites/js/foundation.util.triggers.js',
		//path.toBower + 'foundation-sites/js/foundation.abide.js',
		//path.toBower + 'foundation-sites/js/foundation.accordion.js',
		//path.toBower + 'foundation-sites/js/foundation.accordionMenu.js',
		//path.toBower + 'foundation-sites/js/foundation.drilldown.js',
		//path.toBower + 'foundation-sites/js/foundation.dropdown.js',
		//path.toBower + 'foundation-sites/js/foundation.dropdownMenu.js',
		//path.toBower + 'foundation-sites/js/foundation.equalizer.js',
		//path.toBower + 'foundation-sites/js/foundation.interchange.js',
		//path.toBower + 'foundation-sites/js/foundation.magellan.js',
		//path.toBower + 'foundation-sites/js/foundation.offcanvas.js',
		//path.toBower + 'foundation-sites/js/foundation.orbit.js',
		//path.toBower + 'foundation-sites/js/foundation.responsiveMenu.js',
		//path.toBower + 'foundation-sites/js/foundation.responsiveToggle.js',
		//path.toBower + 'foundation-sites/js/foundation.reveal.js'
		//path.toBower + 'foundation-sites/js/foundation.slider.js',
		//path.toBower + 'foundation-sites/js/foundation.sticky.js',
		//path.toBower + 'foundation-sites/js/foundation.tabs.js',
		//path.toBower + 'foundation-sites/js/foundation.toggler.js',
		//path.toBower + 'foundation-sites/js/foundation.tooltip.js'
	],

	jsFilesLibNormal: [
		path.toBower + 'fastclick/lib/fastclick.js'
	],

	jsFilesOwn: [
		path.toSrc + 'js/**/*.js'
	]
};

module.exports.config = config;
module.exports.files = files;


