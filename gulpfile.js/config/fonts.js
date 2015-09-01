var config = require('./');

module.exports = {
    src: config.assetDirectory + '/Fonts/**/*',
    dest: config.publicDirectory + '/Fonts'
};
