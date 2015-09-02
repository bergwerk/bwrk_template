var config = require('./');

module.exports = {
    autoprefixer: {
        browsers: [
            'last 2 version',
            '> 1%',
            'Firefox ESR'
        ]
    },
    src: config.assetDirectory + "/Css/**/*.{sass,scss}",
    dest: config.publicDirectory + '/Css',
    settings: {
        precision: 10,
        includePaths: [config.bowerDirectory]
    }
};
