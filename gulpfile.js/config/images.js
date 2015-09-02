var config = require('./');

module.exports = {
    src: config.assetDirectory + "/Images/**",
    dest: config.publicDirectory + "/Images",
    mozjpeg: {
        'quality': 97
    },
    zopfli: {
        'more': false
    }
};
