var config = require('./');

module.exports = {
    src: config.assetDirectory + "/Css/**/*.{sass,scss}",
    dest: config.publicDirectory + '/Css'
};
