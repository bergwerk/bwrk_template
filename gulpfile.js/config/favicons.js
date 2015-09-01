var config = require('./');

module.exports = {
    files: {
        src: config.assetDirectory + '/Icons/favicon.png',
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
};
